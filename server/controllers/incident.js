let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Incident = require('../model/incident');

module.exports.displayIncidentList = (req,res,next)=>{
    Incident.find((err, incidentList) => {
        if(err){
            return console.error(err);
        }
        else {
            
            res.render('incident/list', 
            {
                title: 'Incident Record', 
                IncidentList: incidentList,
                displayName: req.user ? req.user.displayName: ''});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('incident/add', {title: 'Add Incident',
    displayName: req.user ? req.user.displayName: ''});
}

module.exports.processAddPage = (req,res,next)=>{
    let newIncident = Incident({
        "name": req.body.name,
        "date": req.body.date,
        "time": req.body.time,
        "location": req.body.location,
        "description": req.body.description
    });
    Incident.create(newIncident, (err, Incident) =>{
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the list
            res.redirect('/incidentlist');
        }
    });
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;

    Incident.findById(id, (err, incidentToEdit) =>{
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('incident/edit', 
            {
                title: 'Edit Incident', 
                incident: incidentToEdit,
                displayName: req.user ? req.user.displayName: ''});
        }
    });

}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id
    let updatedIncident = Incident({
        "_id": id,
        "name": req.body.name,
        "date": req.body.date,
        "time": req.body.time,
        "location": req.body.location,
        "description": req.body.description
    });

    Business.updateOne({_id: id}, updatedIncident, (err) =>{
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the contact list
            res.redirect('/incidentlist');
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id = req.params.id;

    Business.remove({_id: id}, (err)=>{
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the contact list
            res.redirect('/incidentlist');
        }
    });
}
