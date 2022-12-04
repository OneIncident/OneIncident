let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

//create a reference to the model
let Incident = require('../model/incident');
let Record = require('../model/record');

module.exports.displayIncidentList = (req,res,next)=>{
    Incident.find((err, incidentList) => {
        if(err){
            return console.error(err);
        }
        else {
            
            // res.render('incident/list', 
            // {
            //     title: 'Incident Record', 
            //     IncidentList: incidentList,
            //     displayName: req.user ? req.user.displayName: ''});
            res.json(incidentList);
        }
    })
    // .sort({priority : 1});
}

module.exports.displayAddPage = (req,res,next)=>{
    // res.render('incident/add', {title: 'Add Incident',
    // displayName: req.user ? req.user.displayName: ''});
    res.json({success: true, msg: 'Succesfully Displayed Add Page'});
}

module.exports.processAddPage = (req,res,next)=>{
    let newIncident = Incident({
        "name": req.body.name,
        "date": req.body.date,
        "status": req.body.status,
        "location": req.body.location,
        "description": req.body.description,
        "priority":req.body.priority
    });
    Incident.create(newIncident, (err, Incident) =>{
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the list
            //res.redirect('/incidentlist');
            res.json({success: true, msg: 'Successfully Added New Incident'});
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
            // res.render('incident/edit', 
            // {
            //     title: 'Edit Incident', 
            //     incident: incidentToEdit,
            //     displayName: req.user ? req.user.displayName: ''});
            res.json({success: true, msg: 'Successfully Displayed Incident to Edit', incident: incidentToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id;
    let updatedIncident = Incident({
        "_id": id,
        "name": req.body.name,
        "date": req.body.date,
        "status": req.body.status,
        "location": req.body.location,
        "description": req.body.description,
        "priority":req.body.priority
    });

    Incident.updateOne({_id: id}, updatedIncident, (err) =>{
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the contact list
            //res.redirect('/incidentlist');
            res.json({success: true, msg: 'Successfully Edited Incident', incident: updatedIncident});
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id = req.params.id;

    Incident.remove({_id: id}, (err)=>{
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the contact list
            //res.redirect('/incidentlist');
            res.json({success: true, msg: 'Successfully Deleted Incident'});
        }
    });
}
