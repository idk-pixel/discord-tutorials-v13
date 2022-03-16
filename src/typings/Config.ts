import { Client, ClientOptions } from "discord.js";

export type Config = ClientOptions & {
    token: string;
    prefix?: string;
    debug?: boolean;
}