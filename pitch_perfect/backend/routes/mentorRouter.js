const router = require('express').Router()
const mentorCtrl = require('../controllers/mentorCtrl')
const auth = require('../middleware/auth')

// Register User
router.post('/register', mentorCtrl.registerMentor)
// Login User
router.post('/login', mentorCtrl.loginMentor)

// verify Token
router.get('/verify', mentorCtrl.verifiedToken)

module.exports = router