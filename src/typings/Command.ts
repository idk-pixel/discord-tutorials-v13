import { Client } from "../client/Client";
import { Message } from "discord.js";
export interface Command {
    name: string;
    description: string;
    usage: string;
    aliases: string[];
    run: (client: Client, message: Message, args: string[]) => Promise<void>;
}