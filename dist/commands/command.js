"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor(commandInterface) {
        this.SetName(commandInterface.name);
        this.SetDescription(commandInterface.description);
        this.SetCategory(commandInterface.category);
        this.SetAliases(commandInterface.aliases);
        this.SetExecution(commandInterface.exec);
    }
    SetAliases(aliases) {
        this._aliases = aliases;
    }
    GetAliases() {
        return this._aliases;
    }
    SetCategory(category) {
        this._category = category;
    }
    GetCategory() {
        return this._category;
    }
    SetDescription(description) {
        this._description = description;
    }
    GetDescription() {
        return this._description;
    }
    SetExecution(exec) {
        this._exec = exec;
    }
    GetExecution() {
        return this._exec;
    }
    SetName(name) {
        this._name = name;
    }
    GetName() {
        return this._name;
    }
}
exports.Command = Command;
