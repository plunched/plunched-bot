import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class linksCommand extends Command {
  constructor() {
    super("links", {
      aliases: ["links", "link"],
      category: "information",
      description: {
        content: "Gives all the useful links you might need.",
        usage: "links",
        examples: ["links"],
      },
      ratelimit: 3,
    });
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(
      new MessageEmbed()
        .setTitle("useful links")
        .setDescription(
          `[support server](https://discord.gg/pDqXpZAVPY),
      [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot),
      [vote here](https://discordbotlist.com/bots/plunched-bot/upvote),
      [trello](https://trello.com/invite/b/51rP1VFK/1916cac10335c2fc50a8eae541f86490/discord-bot)`
        )
        .setColor(this.client.colors.default)
        .setColor(this.client.colors.default)
        .setTimestamp()
        .setFooter(this.client.user.tag, this.client.user.displayAvatarURL())
    );
  }
}
