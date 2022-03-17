import { setConfig, getConfig } from "../config";
import { config } from 'dotenv'
import { Client } from "./client/Client";
import { Config } from "./typings/Config";
import { BitFieldResolvable, IntentsString } from "discord.js";

config()

setConfig('token', process.env.TOKEN);

setConfig('intents', [
    'GUILDS',
    'GUILD_MESSAGES',
] as BitFieldResolvable<IntentsString, number>);

const options = {
    token: getConfig('token'),
    intents: getConfig('intents')

} as Config

new Client(options)