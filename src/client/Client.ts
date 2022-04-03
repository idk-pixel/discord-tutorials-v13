import { Client as DJSClient, Collection } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
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
        const commandFiles = readdirSync(join(__dirname, '../commands')).filter(file => file.endsWith('.ts'));
        readdirSync(join(__dirname, '../commands')).filter(f => f.endsWith('.js')).forEach(f => commandFiles.push(f))
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`).default as Command ?? require(`../commands/${file}`) as Command;

            this.commands.set(command.name.toLowerCase(), command);

            console.log(`BOT -> Registered Command: ${command.name}`);
        };

        console.log(`BOT -> Registered ${this.commands.size} Commands`);


        // Event Handler

        console.log('BOT -> Registering Modules Events')

        const eventFiles = readdirSync(join(__dirname, '../events')).filter(file => file.endsWith('.ts'));
        readdirSync(join(__dirname, '../events')).filter(f => f.endsWith('.js')).forEach(f => eventFiles.push(f))

        for (let file of eventFiles) {
            let event = require(`../events/${file}`);
            if(event.default) event = event.default;

            const eventName = (event.name);
            if(event.once) {
                this.once(eventName, (...args: any[]) => {
                    event.run(this, ...args)
                })
            } else {
                this.on(eventName, (...args: any[]) => {
                    event.run(this, ...args);
                })
            } 
        }
    }

    private async regDebug() {
        if (this.config.debug) {
            this.on('debug', (info) => {
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