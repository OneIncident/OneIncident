let express = require('express');
let router = express.Router();

let indexContronller = require('../controllers/index');

/* GET home page. */
// router.get('/', indexContronller.displayHomePage);

// router.get('/home', indexContronller.displayHomePage);

// router.get('/dashboard', indexContronller.displaydashboardPage);


// TODO
// // GET route for Login Page
//  router.get('/login', indexContronller.displayLoginPage);

 router.post('/login',indexContronller.processLoginPage);

// // GET route for Register Page
//  router.get('/register', indexContronller.displayRegisterPage);

 router.post('/register',indexContronller.processRegisterPage);

 router.get('/logout', indexContronller.performLogout);

module.exports = router;

