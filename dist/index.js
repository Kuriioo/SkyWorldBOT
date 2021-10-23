"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const discordx_1 = require("discordx");
const bot_1 = require("./client/bot");
const config_1 = require("./config");
const command_manager_1 = __importDefault(require("./commands/command_manager"));
const event_manager_1 = __importDefault(require("./events/event_manager"));
const bot = new bot_1.Bot({
    client: new discordx_1.Client({
        prefix: "%",
        intents: [
            discord_js_1.Intents.FLAGS.GUILDS,
            discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
            discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES,
        ],
        silent: true,
    }),
    config: new config_1.Config({
        prefix: "%",
        token: ""
    })
});
command_manager_1.default.OnCommandsLoaded(() => {
    console.log("[INFO] Toutes les commandes sont chargees.\n");
});
event_manager_1.default.OnEventLoaded(() => {
    console.log("[INFO] Tous les events sont charges.\n");
});
command_manager_1.default.LoadCommands(true);
event_manager_1.default.LoadEvents(true, bot);
bot.Start();
