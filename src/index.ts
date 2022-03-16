import { setConfig, getConfig } from "../config";
import { config } from 'dotenv'

config()

// Setting the env!

setConfig('token', process.env.TOKEN);