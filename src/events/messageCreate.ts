import { Message } from 'discord.js';
import { Bot } from '../client/bot';
import { Event } from './event';
import CommandManager from '../commands/command_manager';

const BotEvent = new Event({
    name: "messageCreate",

    exec: (bot : Bot, message : Message) => {
        if (message.author.bot) 
        {
            return;
        }

        if (!message.content.startsWith(bot.GetConfig().GetPrefix()))
        {
            return;
        }

        const args : string[] = message.content.slice(bot.GetConfig().GetPrefix().length).trim().split(/ +/g);
        const name : string = args.shift()!.toLowerCase();

        if (CommandManager.GetCommandByName(name) != undefined)
        {
            CommandManager.GetCommandByName(name)!.GetExecution()(bot, message, args);
        }
    }
});

export { BotEvent };