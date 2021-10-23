import { Message } from 'discord.js';
import { Bot } from '../client/bot';
import { EmbedPage, Field } from '../utils/EmbedPage';
import { Command } from './command';

const BotCommand = new Command({
    name: "help",
    description: "Affiche la liste des commandes.",
    category: "Utiles",
    aliases: ["aide"],

    exec: (bot : Bot, message : Message, args : String[]) => {
        message.reply("Liste des commandes:");
        
        const embed = new EmbedPage({
            title: "Liste des commandes",
            fields: [
                new Field({
                    title: "Help",
                    content: "Nom: Help\nDescription: Afficher les bails"
                }),
            ]
        });

        message.channel.send({embeds: [embed.GetEmbed()]});
        embed.ResetEmbed();
        embed.AddField(new Field({
            title: "Merci",
            content: "t cho",
        }));
        message.channel.send({embeds: [embed.GetEmbed()]});
    }
});

export { BotCommand };