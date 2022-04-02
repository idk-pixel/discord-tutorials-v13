import Event from "../typings/Event";

export default {
    name: 'ready',
    once: true,
    run: async (client) => {
        client.user?.setActivity(`Hello everyone!`, {type: 'WATCHING'})
    }
} as Event;