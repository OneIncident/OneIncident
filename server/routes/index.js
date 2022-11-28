let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

// /* GET home page. */
// router.get('/', indexContronller.displayHomePage);

// router.get('/home', indexContronller.displayHomePage);

// router.get('/dashboard', indexContronller.displaydashboardPage);



// TODO
// // GET route for Login Page
//  router.get('/login', indexContronller.displayLoginPage);


router.post('/login',indexController.processLoginPage);

// // GET route for Register Page
//  router.get('/register', indexContronller.displayRegisterPage);

 router.post('/register',indexController.processRegisterPage);

 router.get('/logout', indexController.performLogout);

module.exports = router;

