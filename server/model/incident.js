let mongoose = require('mongoose'); //access to mongoose class

//create a model class
let incidentModel = mongoose.Schema({  //structure
    name: String,
    date: String,
    status: String,
    location: String,
    priority: Number,
    description: String
},
{
    collection: "incident_list"
});

module.exports = mongoose.model('Incident', incidentModel);