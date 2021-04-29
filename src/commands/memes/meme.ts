import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
import fetch from "node-fetch";

export default class memeCommand extends Command {
  constructor() {
    super("meme", {
      aliases: ["meme", "memey"],
      category: "memes",
      description: {
        content: "Helps you out with any command",
        usage: "help <command>",
        examples: ["links", "help ping"],
      },
      ratelimit: 3,
      args: [
        {
          id: "subReddit",
          type: "subReddit",
          match: "rest",
        },
      ],
    });
  }

  public exec(
    message: Message,
    { subReddit }: { subReddit: string }
  ): Promise<Message> {
    if (subReddit) {
      fetch(
        `https://meme-api.herokuapp.com/gimme/${subReddit.replace(" ", "")}`
      )
        .then((res) => res.json())
        .then(async (json) => {
          let memeEmbed = new MessageEmbed()
            .setTitle(`${json.title}`)
            .setImage(json.url)
            .setDescription(`**[link](${json.postLink})**`)
            .setFooter(`<:upVote:829727380113195029> ${json.ups}`);

          let msg = await message.channel.send(`Loading a meme...`);
          if (!json.title)
            return msg.edit(`Couldn't find the subreddit \`${subReddit}\``);
          return message.util.send(memeEmbed);
        });
      return;
    }
    return fetch("https://meme-api.herokuapp.com/gimme")
      .then((res) => res.json())
      .then(async (json) => {
        const memeEmbed = new MessageEmbed()
          .setTitle(`${json.title}`)
          .setImage(json.url)
          .setDescription(`**[link](${json.postLink})**`)
          .setFooter(`<:upVote:829727380113195029> ${json.ups}`);

        let msg = await message.channel.send(`Loading a meme...`);
        msg.edit(memeEmbed);
      });
  }
}
