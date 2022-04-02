import { Client, ClientEvents } from "discord.js";

export default interface Event {
    name: keyof ClientEvents;
    once: boolean;
    run: (client: Client, ...args: any[]) => any;
}