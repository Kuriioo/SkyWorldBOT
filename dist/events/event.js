"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(eventInterface) {
        this.SetName(eventInterface.name);
        this.SetExecution(eventInterface.exec);
    }
    GetName() {
        return this._name;
    }
    SetName(name) {
        this._name = name;
    }
    GetExecution() {
        return this._exec;
    }
    SetExecution(exec) {
        this._exec = exec;
    }
}
exports.Event = Event;
