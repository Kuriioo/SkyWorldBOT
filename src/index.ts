import { Intents } from 'discord.js';
import { Client } from 'discordx';

import { Bot } from './client/bot';
import { Config } from './config';

import CommandManager from './commands/command_manager';
import EventManager from './events/event_manager';

const bot = new Bot({
    client: new Client({
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_VOICE_STATES,
        ],
        silent: true,
    }),
    config: new Config({
        prefix: "%",
        token: ""
    })
});

CommandManager.OnCommandsLoaded(() => {
    console.log("[INFO] Toutes les commandes sont chargees.\n");
});

EventManager.OnEventLoaded(() => {
    console.log("[INFO] Tous les events sont charges.\n");
});

CommandManager.LoadCommands(true);
EventManager.LoadEvents(true, bot);
bot.Start();