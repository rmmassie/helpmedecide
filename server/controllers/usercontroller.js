const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const User = sequelize.import('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


router.post('/createuser', function (req, res) {
    const email = req.body.user.email;
    const pass = req.body.user.password;
    const pollCount = req.body.user.pollCount;
    const responseCount = req. body.user.responseCount;
    const rank = req.body.user.rank
    console.log(process.env.JWT_SECRET)
    User.create({
        email: email,
        passwordhash: bcrypt.hashSync(pass, 10),
        pollCount: pollCount,
        responseCount: responseCount,
        rank: rank
    }).then(
        function createSuccess(user) {
            const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            res.status(200).json({
                user: user,
                message: 'created',
                sessionToken: token
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});
router.post('/login', function(req, res){
    User.findOne( {where: {email: req.body.user.email}}).then (
        function(user) {
            if (user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                    if (matches) {
                        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            user: user,
                            message: 'successfully authenticated',
                            sessionToken: token
                        });
                    } else {
                        res.status(502),send({error: "you failed, yo"});
                    }
                });
            } else {
                res.status(500).send({error: "failed to authenticate"});
            }
        },
        function (err) {
            res.status(501).send({error: "you failed, yo"});
        }
        );
});
module.exports = router;