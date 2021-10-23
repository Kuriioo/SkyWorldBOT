"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(clientInterface) {
        this.SetConfig(clientInterface.config);
    }
    Client.prototype.GetConfig = function () {
        return this._config;
    };
    Client.prototype.SetConfig = function (config) {
        this._config = config;
    };
    return Client;
}());
exports.Client = Client;
