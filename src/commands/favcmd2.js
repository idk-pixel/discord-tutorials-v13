module.exports = {
    name: 'favcmd2',
    description: 'favcmd2',
    usage: 'fav',
    aliases: ['MyFAVorite'],
    run: async(c) => {
        c.message.channel.send('My FAVorite Command 2');
    }
}