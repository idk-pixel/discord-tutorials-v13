import { MessageEmbed } from "discord.js";
import Command from "../typings/Command";

export default {
  name: "echo",
  description: "Echo the message back to the channel",
  aliases: ["say"],
  category: "misc",
  run: ({ message, args }) => {
    // Welcome back to a simple echo command

    // If you want error
    // if (!args[0]) {
    //   return message.channel.send('You did not specify a message to echo.');
    // }

    const desc = args[0] ? args.join(' ') : `${message.author} did not specify any content to echo.`

    const embed = new MessageEmbed()

    .setTitle(`${message.author.username} (${message.author.id}) Echo`)
    .setDescription(desc)
    .setColor("#0099ff")
    .setFooter(`Echo command requested by ${message.author.username}`);

    // Send embed

    message.channel.send({
      embeds: [embed]
    });
  },
} as Command;
