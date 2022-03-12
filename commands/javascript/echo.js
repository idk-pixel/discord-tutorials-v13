"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
exports["default"] = {
    name: "echo",
    description: "Echo the message back to the channel",
    aliases: ["say"],
    category: "misc",
    run: function (_a) {
        // Welcome back to a simple echo command
        var message = _a.message, args = _a.args;
        // If you want error
        // if (!args[0]) {
        //   return message.channel.send('You did not specify a message to echo.');
        // }
        var desc = args[0] ? args.join(' ') : "".concat(message.author, " did not specify any content to echo.");
        var embed = new discord_js_1.MessageEmbed()
            .setTitle("".concat(message.author.username, " (").concat(message.author.id, ") Echo"))
            .setDescription(desc)
            .setColor("#0099ff")
            .setFooter("Echo command requested by ".concat(message.author.username));
        // Send embed
        message.channel.send({
            embeds: [embed]
        });
    }
};
