"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CommandManager {
    constructor() {
        this._commands = [];
        this._excludedFiles = [
            "command.js",
            "command_manager.js"
        ];
        this.CommandesAreLoaded = false;
    }
    AddCommand(command) {
        this._commands.push(command);
    }
    GetCommands() {
        return this._commands;
    }
    GetCommandByName(name) {
        let command = undefined;
        this.GetCommands().forEach(c => {
            if (c.GetName() == name) {
                command = c;
            }
        });
        return command;
    }
    GetCommandByIndex(index) {
        return this.GetCommands()[index];
    }
    OnCommandsLoaded(callback) {
        this._onCommandsLoaded = callback;
        this.CommandesAreLoaded = true;
    }
    LoadCommands(show) {
        (0, fs_1.readdir)("dist/commands/", (err, files) => {
            if (err) {
                console.error(err);
                return;
            }
            files.forEach(file => {
                if (file.endsWith(".js") && !this._excludedFiles.includes(file)) {
                    const command = require(`../commands/${file}`);
                    this.AddCommand(command.BotCommand);
                    show ? console.log(`[INFO] (Commande) ${file} est charge.`) : [];
                }
            });
            if (this._onCommandsLoaded != undefined) {
                this._onCommandsLoaded();
            }
        });
    }
}
exports.default = new CommandManager();
