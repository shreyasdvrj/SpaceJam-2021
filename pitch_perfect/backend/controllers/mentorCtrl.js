const Mentors = require('../models/mentorModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const mentorCtrl = {
    registerMentor: async (req, res) =>{
        try {
            const {username, email, experience, password} = req.body;
            const mentor = await Mentors.findOne({email: email})
            if(mentor) return res.status(400).json({msg: "The email already exists."})

            const passwordHash = await bcrypt.hash(password, 10)
            const newMentor = new Mentors({
                username: username,
                email: email,
                experience: experience,
                password: passwordHash
            })
            await newMentor.save()
            res.json({msg: "Sign up Success"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    loginMentor: async (req, res) =>{
        try {
            const {email, password} = req.body;
            const mentor = await Mentors.findOne({email: email})
            if(!mentor) return res.status(400).json({msg: "User does not exist."})

            const isMatch = await bcrypt.compare(password, mentor.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

            // if login success create token
            const payload = {id: mentor._id, name: mentor.username}
            const token = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: "1d"})

            res.json({token})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    verifiedToken: (req, res) =>{
        try {
            const token = req.header("Authorization")
            if(!token) return res.send(false)

            jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) =>{
                if(err) return res.send(false)

                const mentor = await Mentors.findById(verified.id)
                if(!mentor) return res.send(false)

                return res.send(true)
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    } 
}


module.exports = mentorCtrl