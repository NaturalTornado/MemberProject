// membersRouter.js - Routing for members functionality
const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
    renderHomePage,
    addNewMessage,
    upgradeToMember,
    renderSignUpForm,
    handleSignUp,
    renderLogInForm,
    handleLogOut,
} = require('../controllers/membersController');

// Home page route
router.get('/', renderHomePage);

// Add a new message route
router.post('/new-message', addNewMessage);

// Membership upgrade route
router.post('/become-a-member', upgradeToMember);

// Sign-up form route
router.get('/sign-up', renderSignUpForm);

// Handle user sign-up
router.post('/sign-up', handleSignUp);

// Log-in form route
router.get('/log-in', renderLogInForm);

// Handle user log-out
router.get('/log-out', handleLogOut);

// Handle user log-in
router.post(
    '/log-in',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/log-in',
        failureFlash: false, // Add flash messages later if desired
    })
);

module.exports = router;
