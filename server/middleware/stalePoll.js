//require('dotenv').config();
const sequelize = require('../db');
const Poll = sequelize.import('../models/poll');

module.exports = function(res, req, next) {

    Poll.findAll()
    .then(result => {
        for (i = 0; i < result.length; i++){
            let offsetDays = .00138
            let offset = offsetDays * 24 * 60 * 60 * 1000;
            let timeNow = Date.now()
            let staleTime = timeNow-offset;
            let staleDate = new Date(staleTime);
            let pollId = result[i].dataValues.id;
            let created = result[i].dataValues.createdAt;
            
            // add && changedState === true
            if (created < staleDate){
                console.log("this one is old");
                Poll.findOne({
                    where:{
                        id: pollId
                    }
                }).then(result => {
                    Poll.update({
                        changedState: false
                    }, {
                        where: {
                            id: result.id
                        }
                    })
                });
            } else if (created >= staleDate){
                console.log("this one is new");
            }
            console.log(pollId, created);
        }
    next()
    })
}
