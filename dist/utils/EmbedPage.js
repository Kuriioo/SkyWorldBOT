"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedPage = exports.Field = void 0;
const discord_js_1 = require("discord.js");
class Field {
    constructor(parameters) {
        this.SetTitle(parameters.title);
        this.SetContent(parameters.content);
    }
    GetTitle() {
        return this._title;
    }
    SetTitle(title) {
        this._title = title;
    }
    GetContent() {
        return this._content;
    }
    SetContent(content) {
        this._content = content;
    }
}
exports.Field = Field;
class EmbedPage {
    constructor(parameters) {
        this._separator = 5;
        this._embed = new discord_js_1.MessageEmbed();
        this.SetTitle(parameters.title);
        this.SetSeparator(parameters.separator);
        this.SetFields(parameters.fields);
    }
    GetEmbed() {
        return this._embed;
    }
    ResetEmbed() {
        this._embed = new discord_js_1.MessageEmbed();
        this._embed.setTitle(this._title);
        this._fields = [];
    }
    GetFields() {
        return this._fields;
    }
    SetFields(fields) {
        this._fields = fields;
        fields.forEach(f => this.AddField(f));
    }
    ;
    AddField(field) {
        this._embed.addField(field.GetTitle(), field.GetContent());
        this._fields?.push(field);
    }
    SetTitle(title) {
        this._embed.setTitle(title);
        this._title = title;
    }
    GetTitle() {
        return this._title;
    }
    SetSeparator(separator) {
        this._separator = separator;
    }
    GetSeparator() {
        return this._separator;
    }
}
exports.EmbedPage = EmbedPage;
