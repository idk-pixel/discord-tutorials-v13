import { setConfig, getConfig } from "../config";
import { config } from 'dotenv'

config()

setConfig('token', process.env.TOKEN);
