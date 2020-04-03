const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Poll = sequelize.import('../models/poll')
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    Poll.findAll()
    .then(poll => res.status(200).json(poll))
    .catch(err => res.status(500).json ({
        error: err
}))
})
router.post('/new', (req, res) => {
    tokenInfo = jwt.decode(req.body.token, process.env.JWT_SECRET)
       
    const pollFromRequest = {
        userId: tokenInfo.id,
        //
        typeId: 1,
        // functionality for user to edit tags
        tags: ['programming', 'react'],
        question: req.body.question,
        solution1: req.body.answer1,
        solution2: req.body.answer2,
        changedState: true
    }
    
    
    // console.log(req)
    Poll.create(pollFromRequest)
    .then(poll => {

        res.status(200).json(poll)
    })
    .catch(err => res.json ({
        error: err
    }))
});
module.exports = router; 