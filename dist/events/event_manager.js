"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class EventManager {
    constructor() {
        this._events = [];
        this._excludedFiles = [
            "event.js",
            "event_manager.js"
        ];
        this.EventsAreLoaded = false;
    }
    AddEvent(event) {
        this._events.push(event);
    }
    GetEvents() {
        return this._events;
    }
    GetEventByName(name) {
        this.GetEvents().forEach(e => {
            if (e.GetName() == name) {
                return e;
            }
        });
        return undefined;
    }
    GetEventByIndex(index) {
        return this.GetEvents()[index];
    }
    OnEventLoaded(callback) {
        this._onEventsLoaded = callback;
        this.EventsAreLoaded = true;
    }
    LoadEvents(show, bot) {
        (0, fs_1.readdir)("dist/events/", (err, files) => {
            if (err) {
                console.error(err);
                return;
            }
            files.forEach(file => {
                if (file.endsWith(".js") && !this._excludedFiles.includes(file)) {
                    const event = require(`../events/${file}`);
                    this.AddEvent(event.BotEvent);
                    bot.GetClient().on(event.BotEvent.GetName(), (...args) => event.BotEvent.GetExecution()(bot, ...args));
                    show ? console.log(`[INFO] (Event) ${file} est charge.`) : [];
                }
            });
            if (this._onEventsLoaded != undefined) {
                this._onEventsLoaded();
            }
        });
    }
}
exports.default = new EventManager();
