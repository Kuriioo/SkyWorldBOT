import { Message, MessageEmbed } from 'discord.js';

interface FieldInterface
{
    title : string;
    content : string;
}

class Field
{
    private _title! : string;
    private _content! : string;

    public GetTitle() : string
    {
        return this._title;
    }

    public SetTitle(title : string) 
    {
        this._title = title;
    }

    public GetContent() : string
    {
        return this._content;
    }

    public SetContent(content : string)
    {
        this._content = content;
    }

    constructor(parameters : FieldInterface)
    {
        this.SetTitle(parameters.title);
        this.SetContent(parameters.content);
    }
}

interface EmbedPageInterface
{
    title : string;
    separator? : number;
    fields : Field[];
}

class EmbedPage
{
    private _title! : string;
    private _separator : number = 5;
    private _fields! : Field[];
    private _embed! : MessageEmbed;

    public GetEmbed() : MessageEmbed
    {
        return this._embed;
    }

    public ResetEmbed()
    {
        this._embed = new MessageEmbed();
        this._embed.setTitle(this._title);
        this._fields = [];
    }

    public GetFields() : Field[]
    {
        return this._fields;
    }

    public SetFields(fields : Field[])
    {
        this._fields = fields;
        fields.forEach(f => this.AddField(f));
    };

    public AddField(field : Field)
    {
        this._embed.addField(field.GetTitle(), field.GetContent());
        this._fields?.push(field);
    }

    public SetTitle(title : string)
    {
        this._embed.setTitle(title);
        this._title = title;
    }

    public GetTitle() : string
    {
        return this._title;
    }

    public SetSeparator(separator : number)
    {
        this._separator = separator;
    }

    public GetSeparator() : number
    {
        return this._separator;
    }

    constructor(parameters : EmbedPageInterface)
    {
        this._embed = new MessageEmbed();
        
        this.SetTitle(parameters.title!);
        this.SetSeparator(parameters.separator!);
        this.SetFields(parameters.fields!);

    }
}

export {
    Field,
    EmbedPage
}