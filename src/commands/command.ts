interface CommandInterface 
{
    name : String;
    description : String;
    category : String;
    aliases : String[];
    exec : Function;
}

export class Command 
{
    private _name! : String;
    private _description! : String;
    private _category! : String;
    private _aliases! : String[];
    private _exec! : Function; 

    public SetAliases(aliases : String[])
    {
        this._aliases = aliases;
    }

    public GetAliases() : String[]
    {
        return this._aliases;
    }

    public SetCategory(category : String)
    {
        this._category = category;
    }
    
    public GetCategory() : String
    {
        return this._category;
    }

    public SetDescription(description : String)
    {
        this._description = description;
    }

    public GetDescription() : String
    {
        return this._description;
    }

    public SetExecution(exec : Function)
    {
        this._exec = exec;
    }

    public GetExecution() : Function
    {
        return this._exec;
    }

    public SetName(name : String)
    {
        this._name = name;
    }

    public GetName() : String
    {
        return this._name;
    }

    constructor(commandInterface : CommandInterface) 
    {
        this.SetName(commandInterface.name);
        this.SetDescription(commandInterface.description);
        this.SetCategory(commandInterface.category);
        this.SetAliases(commandInterface.aliases);
        this.SetExecution(commandInterface.exec);
    }
}