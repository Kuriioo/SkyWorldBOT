"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
class Bot {
    constructor(botInterface) {
        this.SetConfig(botInterface.config);
        this.SetClient(botInterface.client);
    }
    SetConfig(config) {
        this._config = config;
    }
    GetConfig() {
        return this._config;
    }
    SetClient(client) {
        this._client = client;
    }
    GetClient() {
        return this._client;
    }
    Start() {
        this._client.login(this._config.GetToken());
    }
}
exports.Bot = Bot;
