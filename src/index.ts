import { setConfig, getConfig } from "../config";
import { config } from 'dotenv'
import { Client } from "./client/Client";
import { Config } from "./typings/Config";

config()

setConfig('token', process.env.TOKEN);

setConfig('intents', [
    'GUILDS',
    'GUILD_MESSAGES'
])

const options = {
    token: getConfig('token'),
    intents: getConfig('intents')

} as Config

new Client(options)