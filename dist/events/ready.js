"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotEvent = void 0;
const event_1 = require("./event");
const BotEvent = new event_1.Event({
    name: "ready",
    exec: (bot) => {
        console.log("[INFO] Le bot est en ligne.");
    }
});
exports.BotEvent = BotEvent;
