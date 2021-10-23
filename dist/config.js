"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
    constructor(configInterface) {
        this.SetPrefix(configInterface.prefix);
        this.SetToken(configInterface.token);
    }
    GetPrefix() {
        return this._prefix;
    }
    SetPrefix(prefix) {
        this._prefix = prefix;
    }
    GetToken() {
        return this._token;
    }
    SetToken(token) {
        this._token = token;
    }
}
exports.Config = Config;
