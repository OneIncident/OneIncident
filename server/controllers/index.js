let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create the User Model Instance
let userModel = require('../model/user');
let User = userModel.User; //alias

module.exports.displayHomePage = (req,res,next)=>{
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displaydashboardPage = (req,res,next)=>{
    res.render('dashboard', { title: 'Incident Dashboard' , displayName: req.user ? req.user.displayName : ''});
}

//
// module.exports.displayLoginPage = (req,res,next)=> {
//     //check if the user is already logged in
//     if(!req.user){
//         res.render('auth/login',{
//             title: "Login",
//             messages: req.flash('loginMessage'),
//             displayName: req.user ? req.user.displayName: ''
//         })
//     }else {
//         return res.redirect('/');
//     }
// }
// TODO
// module.exports.processLoginPage = (req,res,next)=> {
//     passport.authenticate('local',
//     (err,user,info)=> {
//         //server error?
//         if(err){
//             return next(err);
//         }
//         //is there a user login error?
//         if(!user){
//             req.flash('loginMessage','Authentication Error');
//             return res.redirect('/login');
//         }
//         req.login(user, (err)=> {
//             //server error?
//             if (err) {
//                 return next(err);
//             }
//             return res.redirect('/incidentlist');
//         });
//     })(req,res,next);
// }
//TODO
// module.exports.displayRegisterPage = (req,res,next) => {
//     //check if the user is net already logged in
//     if(!req.user){
//         res.render('auth/register',{
//             title: 'Register',
//             messages: req.flash('registerMessage'),
//             displayName: req.user ? req.user.displayName: ''
//         });
//     }
//     else {
//         return res.redirect('/');
//     }
// }

//TODO
// module.exports.processRegisterPage = (req,res,next) => {
//     //instantiate a user object
//     let newUser = new User({
//         username: req.body.username,
//         //password: req.body.password,
//         email: req.body.email,
//         displayName: req.body.displayName
//     });

//     User.register(newUser, req.body.password, (err)=> {
//         if(err) {
//             console.log("Error: Inserting New User");
//             if(err.name == "UserExistsError"){
//                 req.flash(
//                     'registerMessage',
//                     'Registration Error: User already exists'
//                 );
//                 console.log('Error: User already exists');
//             }
//             return res.render('auth/register', 
//             {
//                 title: 'Register',
//                 messages: req.flash('registerMessage'),
//                 displayName: req.user ? req.user.displayName: ''
//             });
//         }
//         else{
//             //if no error exists, then registeration is sccessful

//             //redirect the user and authenticate them

//             return passport.authenticate('local')(req,res, () =>{
//                 res.redirect('/incidentlist');
//             });
        
//     };
// });
// }

module.exports.performLogout = (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
    });
    res.redirect('/');
}