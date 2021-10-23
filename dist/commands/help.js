"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotCommand = void 0;
const EmbedPage_1 = require("../utils/EmbedPage");
const command_1 = require("./command");
const BotCommand = new command_1.Command({
    name: "help",
    description: "Affiche la liste des commandes.",
    category: "Utiles",
    aliases: ["aide"],
    exec: (bot, message, args) => {
        message.reply("Liste des commandes:");
        const embed = new EmbedPage_1.EmbedPage({
            title: "Liste des commandes",
            fields: [
                new EmbedPage_1.Field({
                    title: "Help",
                    content: "Nom: Help\nDescription: Afficher les bails"
                }),
            ]
        });
        message.channel.send({ embeds: [embed.GetEmbed()] });
        embed.ResetEmbed();
        embed.AddField(new EmbedPage_1.Field({
            title: "Merci",
            content: "t cho",
        }));
        message.channel.send({ embeds: [embed.GetEmbed()] });
    }
});
exports.BotCommand = BotCommand;
