export interface ConfigInterface
{
    prefix : string;
    token : string;
}

export class Config
{
    private _prefix! : string;
    private _token! : string;

    public GetPrefix() : string
    {
        return this._prefix;
    }
    
    public SetPrefix(prefix : string)
    {
        this._prefix = prefix;
    }
    
    public GetToken() : string
    {
        return this._token;
    }

    public SetToken(token : string)
    {
        this._token = token;
    }

    constructor(configInterface : ConfigInterface)
    {
        this.SetPrefix(configInterface.prefix);
        this.SetToken(configInterface.token);
    }
}