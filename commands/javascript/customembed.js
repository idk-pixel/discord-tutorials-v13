// All commands converted to Javascript by using "tsc"

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    name: 'customembed',
    description: 'Customembed | code in desc!',
    usage: 'customembed <title> <desc>',
    aliases: ['ce'],
    category: 'misc',
    run: ({ 
    // welcome back to another video! code will be in desc!
    args, message }) => {
        if (!args[0]) {
            return message.reply('You will need to specify the title of the embed.');
        }
        ;
        if (!args[1]) {
            return message.reply('Please specify the description of the embed.');
        }
        ;
        const desc = args.slice(1).join(' ');
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(args[0])
            .setDescription(desc)
            // Set color to hex or favorite color!
            .setColor('RED');
        message.channel.send({
            embeds: [embed]
        });
    }
};
