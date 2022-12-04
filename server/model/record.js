"use strict"
class Incident
{
    constructor(_id = "", name="", date = "", status ="", location="", priority = 0, description="")
    {
        this._id = _id;
        this.name = name;
        this.date = date;
        this.status = status;
        this.location = location;
        this.priority = priority;
        this.description = description;
    }

    toString()
    {
        return "_id          : " + this._id + "\n" +
               " name        : " + this.name + "\n" +
               " date        : " + this.date + "\n" +
               " status      : " + this.status + "\n" +
               " location    : " + this.location + "\n" +
               " priority    : " + this.priority + "\n" +
               " description : " + this.description;
    }
}

module.exports.Incident = Incident;