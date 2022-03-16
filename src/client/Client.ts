import { Client as DJSClient } from "discord.js";
import { Config } from "../typings/Config";

export class Client extends DJSClient {
    constructor(
        public config: Config
    ) {
        super(config)

        this.start()
    }
    private async registerModules() {
        if(this.config.debug) {
            this.on('debug', (info)=>{
                console.log(`DEBUG -> ${info}`)
            })
        }
    }
    private async start() {
        try {
            await this.login(this.config.token);
            console.log('BOT -> Logged in')
        } catch (err) {
            console.log(
                'BOT -> Error While Logging IN'
            )

            console.log(
                err
            );
        }
    }
}