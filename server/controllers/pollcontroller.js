const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Poll = sequelize.import('../models/poll');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    Poll.findAll()
    .then(poll => res.status(200).json(poll))
    .catch(err => res.status(500).json ({
        error: err
}))
})



// ROUTE TO POST NEW POLL
router.post('/new', (req, res) => {
    tokenInfo = jwt.decode(req.body.token, process.env.JWT_SECRET)
       
    const pollFromRequest = {
        userId: tokenInfo.id,
        //Make this a request from the list of possible polls
        typeId: 1,
        tags: ['programming', 'react'],
        question: req.body.question,
        solution1: req.body.answer1,
        solution2: req.body.answer2,
        //changedState: true
    }
    Poll.create(pollFromRequest)
    .then(poll => {
       res.status(200).json(poll)
    })
    .catch(err => res.json ({
        error: err
    }))
});



//  ROUTE FOR ACTIVE POLLS
router.get('/active', (req,res) => {
    Poll.findAll(
        {where: {changedState: true}})
    .then(poll => res.status(200).json(poll))
    .catch(err => res.json ({
    error: err
})
)})


// ROUTES FOR CLOSED POLL
    router.get('/closed', (req,res) => {
        Poll.findAll(       
            {where: {changedState: false}})
        .then(poll => res.status(200).json(poll))
        .catch(err => res.json ({
            error: err
        })
        )})
    

module.exports = router; 