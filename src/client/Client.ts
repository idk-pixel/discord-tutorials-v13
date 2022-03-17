import { Client as DJSClient, Collection } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { Command } from "../typings/Command";
import { Config } from "../typings/Config";

export class Client extends DJSClient {
    constructor(
        public config: Config,
        public commands = new Collection<string, Command>()
    ) {
        super(config)

        this.start()
    }
    private async registerModules() {
        console.log('BOT -> Registering Modules Command')
        const commandsDirectory = readdirSync(join(__dirname, '../commands')).filter(file => file.endsWith('.ts'));

        for (const file of commandsDirectory) {
            const command = require(`../commands/${file}`).default as Command;

            this.commands.set(command.name, command);

            console.log(`BOT -> Registered Command: ${command.name}`);
        };

        console.log(`BOT -> Registered ${this.commands.size} Commands`);
    }

    private async regDebug() {
        if(this.config.debug) {
            this.on('debug', (info)=>{
                console.log(`DEBUG -> ${info}`)
            })
        }
    }

    private async start() {
        try {
            this.regDebug()
        } catch (err) {
            console.log('Error registering debug')
        }
        
        try {
            await this.registerModules()
        } catch (e) {
            console.log('Error registering modules')
            console.log(e)
        }

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