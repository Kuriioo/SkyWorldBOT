import { readdir } from "fs";
import { Command } from "./command";

class CommandManager
{
    private _commands : Command[] = [];
    private _onCommandsLoaded? : Function;
    private _excludedFiles : String[] = [
        "command.js",
        "command_manager.js"
    ];

    public CommandesAreLoaded : Boolean = false;

    public AddCommand(command : Command)
    {
        this._commands.push(command);
    }

    public GetCommands() : Command[]
    {
        return this._commands;
    }

    public GetCommandByName(name : string) : Command | undefined
    {
        let command = undefined;
        this.GetCommands().forEach(c => {
            if (c.GetName() == name)
            {
                command = c;
            }
        });
        return command;
    }

    public GetCommandByIndex(index : number) : Command | undefined
    {
        return this.GetCommands()[index];
    }

    public OnCommandsLoaded(callback : Function)
    {
        this._onCommandsLoaded = callback;
        this.CommandesAreLoaded = true;
    }

    public LoadCommands(show : Boolean)
    {
        readdir("dist/commands/", (err : any, files : String[]) => {
            if (err)
            {
                console.error(err);
                return;
            }
            files.forEach(file  => {
                if (file.endsWith(".js") && !this._excludedFiles.includes(file))
                {
                    const command = require(`../commands/${file}`);
                    this.AddCommand(command.BotCommand);

                    show ? console.log(`[INFO] (Commande) ${file} est charge.`) : [];
                }
            });
            if (this._onCommandsLoaded != undefined)
            {
                this._onCommandsLoaded();
            }
        });
    }
}

export default new CommandManager();