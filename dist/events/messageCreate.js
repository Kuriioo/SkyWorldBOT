"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotEvent = void 0;
const event_1 = require("./event");
const command_manager_1 = __importDefault(require("../commands/command_manager"));
const BotEvent = new event_1.Event({
    name: "messageCreate",
    exec: (bot, message) => {
        if (message.author.bot) {
            return;
        }
        if (!message.content.startsWith(bot.GetConfig().GetPrefix())) {
            return;
        }
        const args = message.content.slice(bot.GetConfig().GetPrefix().length).trim().split(/ +/g);
        const name = args.shift().toLowerCase();
        if (command_manager_1.default.GetCommandByName(name) != undefined) {
            command_manager_1.default.GetCommandByName(name).GetExecution()(bot, message, args);
        }
    }
});
exports.BotEvent = BotEvent;
