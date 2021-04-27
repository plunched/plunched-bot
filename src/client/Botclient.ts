import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { User, Message } from "discord.js";
import { join } from "path";
import { prefix, owners, colors, emotes } from "../config";
import { Intents } from "discord.js";
import { pool } from "../db";

declare module "discord-akairo" {
  interface AkairoClient {
    commandHandler: CommandHandler;
    listenerHandler: ListenerHandler;
    colors: typeof colors;
    emotes: typeof emotes;
  }
}

interface BotOptions {
  token?: string;
  owners?: string | string[];
}

export default class BotClient extends AkairoClient {
  public config: BotOptions;
  public colors = colors;
  public emotes = emotes;
  public listenerHandler: ListenerHandler = new ListenerHandler(this, {
    directory: join(__dirname, "..", "listeners"),
  });
  public commandHandler: CommandHandler = new CommandHandler(this, {
    directory: join(__dirname, "..", "commands"),
    prefix: async (msg): Promise<string | string[]> => {
      await pool.query(
        "INSERT INTO guilds (guildID, guildName, prefixes, totalCommands) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING",
        [msg.guild.id, msg.guild.name, prefix, 0]
      );

      let guildSettings = await pool.query(
        "SELECT prefixes FROM guilds WHERE guildID = $1;",
        [msg.guild.id]
      );
      return guildSettings.rows[0].prefixes;
    },
    allowMention: true,
    handleEdits: true,
    commandUtil: true,
    blockBots: true,
    blockClient: true,
    commandUtilLifetime: 3e5,
    defaultCooldown: 6e4,
    argumentDefaults: {
      prompt: {
        modifyStart: (_: Message, str: string): string =>
          `${str}\nType \`cancel\` to cancel the prompt.`,
        modifyRetry: (_: Message, str: string): string =>
          `${str}\nType \`cancel\` to cancel the prompt.`,
        timeout: "The command has been automatically canceled...",
        ended:
          "The command has been automatically canceled due to exceeded tries...",
        cancel: "canceled the command...",
        time: 3e4,
      },
      otherwise: "",
    },
    ignorePermissions: owners,
  });

  public constructor(config: BotOptions) {
    super({
      ownerID: config.owners,
      intents: new Intents(Intents.ALL),
    });

    this.config = config;
  }

  private async _init(): Promise<void> {
    this.commandHandler.useListenerHandler(this.listenerHandler);
    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
      listenerHandler: this.listenerHandler,
      process,
    });

    this.commandHandler.loadAll();
    this.listenerHandler.loadAll();
  }

  public async start(): Promise<string> {
    await this._init();
    return this.login(this.config.token);
  }
}
