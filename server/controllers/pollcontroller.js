const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Poll = sequelize.import('../models/poll')

router.get('/', (req, res) => {
    Poll.findAll()
    .then(poll => res.status(200).json(poll))
    .catch(err => res.status(500).json ({
        error: err
}))
})
router.post('/', (req, res) => {
    const pollFromRequest = {
        userId: req.body.userId,
        typeId: req.body.typeId,
        tags: req.body.tags,
        question: req.body.question,
        solution1: req.body.solution1,
        solution2: req.body.solution2
    }
    console.log(req)
    Poll.create(pollFromRequest)
    .then(poll => res.status(200).json(poll))
    .catch(err => res.json ({
        error: err
    }))
});
module.exports = router;