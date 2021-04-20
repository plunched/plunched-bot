import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { User, Message } from "discord.js";
import { join } from "path";
import { prefix, owners, colors } from "../config";
import { Intents } from "discord.js";

declare module "discord-akairo" {
  interface AkairoClient {
    commandHandler: CommandHandler;
    listenerHandler: ListenerHandler;
    colors: typeof colors;
  }
}

interface BotOptions {
  token?: string;
  owners?: string | string[];
  colors?: object;
}

export default class BotClient extends AkairoClient {
  public config: BotOptions;
  public colors = colors;
  public listenerHandler: ListenerHandler = new ListenerHandler(this, {
    directory: join(__dirname, "..", "listeners"),
  });
  public commandHandler: CommandHandler = new CommandHandler(this, {
    directory: join(__dirname, "..", "commands"),
    prefix: prefix,
    allowMention: true,
    handleEdits: true,
    commandUtil: true,
    blockBots: true,
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
