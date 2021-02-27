const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')

// Register User
router.post('/userregister', function(req,res){
    userCtrl.registerUser
});
router.get('/test', function(req,res){
    console.log("yes")
})
// Login User
router.post('/login', function(req,res){
    userCtrl.loginUser
});
//Verify token
router.get('/verify', function(req,res){
    userCtrl.verifiedToken
});

module.exports = router