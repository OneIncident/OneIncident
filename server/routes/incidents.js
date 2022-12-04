let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');
let incidentController = require('../controllers/incident');

//AUTH
 //helper function for guard purposes
 function requireAuth (req,res,next) 
 {
     //check if the user is logged in
     if(!req.isAuthenticated())
     {
         return res.redirect('/login');
     }
     next();
 }

/* GET Route for the incident list -- READ operation*/
router.get('/', incidentController.displayIncidentList);

// /* GET Route for displaying ADD page -- CREATE operation*/
router.get('/add', requireAuth, incidentController.displayAddPage);

/* GET Route for displaying ADD page -- CREATE operation*/
//router.get('/add', incidentController.displayAddPage);

// /* POST Route for processing ADD page -- CREATE operation*/
router.post('/add',requireAuth, incidentController.processAddPage);

/* POST Route for processing ADD page -- CREATE operation*/
//router.post('/add', incidentController.processAddPage);

// /* GET Route for displaying EDIT page -- UPDATE operation*/
router.get('/edit/:id',requireAuth, incidentController.displayEditPage);

/* GET Route for displaying EDIT page -- UPDATE operation*/
//router.get('/edit/:id', incidentController.displayEditPage);

// /* POST Route for processing EDIT page -- UPDATE operation*/
router.post('/edit/:id',requireAuth, incidentController.processEditPage);

/* POST Route for processing EDIT page -- UPDATE operation*/
//router.post('/edit/:id', incidentController.processEditPage);

// AUTH
// /* GET to perform DELETION -- DELETE operation*/
router.get('/delete/:id',requireAuth, incidentController.performDelete);

/* GET to perform DELETION -- DELETE operation*/
//router.get('/delete/:id', incidentController.performDelete);

module.exports = router;











