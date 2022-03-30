import { Command } from "../typings/Command";

export default {
    name: 'myFavCommand',
    description: 'My favorite command',
    usage: 'myFavCommand',
    aliases: ['myFavComman2d'],
    run: async ({
        client,
        message,
        args  
    }) => {
        message.channel.send('My favorite command')
    }
} as Command