import { readdir } from "fs";
import { Bot } from "../client/bot";
import { Event } from "./event";

class EventManager
{
    private _events : Event[] = [];
    private _onEventsLoaded? : Function;
    private _excludedFiles : String[] = [
        "event.js",
        "event_manager.js"
    ];

    public EventsAreLoaded : Boolean = false;

    public AddEvent(event : Event)
    {
        this._events.push(event);
    }

    public GetEvents() : Event[]
    {
        return this._events;
    }

    public GetEventByName(name : string) : Event | undefined
    {
        this.GetEvents().forEach(e => {
            if (e.GetName() == name)
            {
                return e;
            }
        });
        return undefined;
    }

    public GetEventByIndex(index : number) : Event | undefined
    {
        return this.GetEvents()[index];
    }

    public OnEventLoaded(callback : Function)
    {
        this._onEventsLoaded = callback;
        this.EventsAreLoaded = true;
    }

    public LoadEvents(show : Boolean, bot : Bot)
    {
        readdir("dist/events/", (err : any, files : String[]) => {
            if (err)
            {
                console.error(err);
                return;
            }
            files.forEach(file  => {
                if (file.endsWith(".js") && !this._excludedFiles.includes(file))
                {
                    const event = require(`../events/${file}`);
                    this.AddEvent(event.BotEvent);
                    
                    bot.GetClient().on(event.BotEvent.GetName(), (...args) => event.BotEvent.GetExecution()(bot, ...args));
                    
                    show ? console.log(`[INFO] (Event) ${file} est charge.`) : [];
                }
            });
            if (this._onEventsLoaded != undefined)
            {
                this._onEventsLoaded();
            }
        });
    }
}

export default new EventManager();