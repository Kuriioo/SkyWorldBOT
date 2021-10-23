import { Bot } from '../client/bot';
import { Event } from './event';

const BotEvent = new Event({
    name: "ready",

    exec: (bot : Bot) => {
        console.log("[INFO] Le bot est en ligne.");
    }
});

export { BotEvent };