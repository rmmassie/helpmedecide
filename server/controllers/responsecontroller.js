const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Poll = sequelize.import('../models/poll')
const Response = sequelize.import('../models/response')
const jwt = require('jsonwebtoken');

//FETCH ALL RESPONSES from A GIVEN POLL
router.get('/', (req, res) => {
    console.log(req)
    res.send('This is the GET ALL RESPONSES Route')
});

//SEND A USER RESPONSE INTO THE DATABASE
router.post('/:pollID/', (req, res) => {
    console.log("Poll is ", req.params.pollID)
    console.log("Session is ",req.body.session)
    console.log("Vote is Option ", req.body.vote)
    let userId = jwt.decode(req.body.session, process.env.JWT_SECRET)
    console.log("User Id is :", userId.id)
    try {
        Response.create({
          pollId: req.params.pollID,
          userId: userId.id,
          response: req.body.vote
        })
    }
    catch {
        res.send('There is an error with user ID: ', userId.id)
    }
    res.send({
        message: "Vote is Counted",
        user: userId.id,
        response: req.body.vote
    })
});

//GET RESPONSES FROM A GIVEN POLL
router.get('/:pollID', (req, res) => {
    console.log(req)
    res.send('This is the GET RESPONSES FOR SPECIFIC POLL Route')
});

//GET POLLS & RESPONSES FROM A GIVEN USER
router.get('/:userID', (req, res) => {
    console.log(req)
    res.send('This is the GET POLLS & RESPONSES FOR SPECIFIC USER Route')
});
module.exports = router; 