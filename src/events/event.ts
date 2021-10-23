interface EventInterface
{
    name : string;
    exec : Function;
}

export class Event
{
    private _name! : string;
    private _exec! : Function;

    public GetName() : string
    {
        return this._name;
    }

    public SetName(name : string)
    {
        this._name = name;
    }

    public GetExecution() : Function
    {
        return this._exec;
    }

    public SetExecution(exec : Function)
    {
        this._exec = exec;
    }

    constructor(eventInterface : EventInterface)
    {
        this.SetName(eventInterface.name);
        this.SetExecution(eventInterface.exec);
    }
}