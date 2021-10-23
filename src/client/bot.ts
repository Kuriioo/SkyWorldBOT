import { Client } from 'discordx';
import { Config } from '../config';

interface BotInterface
{  
    client : Client;
    config : Config;
}

export class Bot
{
    private _client! : Client;
    private _config! : Config;

    public SetConfig(config : Config)
    {
        this._config = config;
    }

    public GetConfig() : Config
    {
        return this._config;
    }

    public SetClient(client : Client)
    {
        this._client = client;
    }

    public GetClient() : Client
    {
        return this._client;
    }

    public Start()
    {
        this._client!.login(this._config!.GetToken()!);
    }

    constructor(botInterface : BotInterface)
    {
        this.SetConfig(botInterface.config);
        this.SetClient(botInterface.client);
    }
}