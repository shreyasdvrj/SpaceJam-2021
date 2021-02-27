const router = require('express').Router()
const mentorCtrl = require('../controllers/mentorCtrl')

// Register User
router.post('/mentorregister', function(req,res){
    mentorCtrl.registerUser
    console.log("In register")
});
// Login User
router.post('/mentorlogin', function(req,res){
    mentorCtrl.loginUser
});
//Verify token
router.get('/verify', function(req,res){
    mentorCtrl.verifiedToken
});

module.exports = router