import { Message } from "discord.js";
import { getConfig } from "../../config";
import Event from "../typings/Event";

export default {
    name: 'messageCreate',
    once: false,
    run: async (client, message: Message) => {
        const prefix = getConfig('prefix');
        if (!message.content.startsWith(prefix)) return;
        if(message.author.bot || !message.guild) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command_name = args.shift()?.toLowerCase();
        const command = client.commands.get((command_name as string));
        if (command) {
            let props = {
                client: client,
                message: message,
                args: args
            }
            command.run(props);
        } else return;
    }
} as Event