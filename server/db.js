require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('helpMeDecide', 'postgres', process.env.PGPW, {
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Conntectd to the HelpMeDecide postgres database');
    },
    function(err){
        console.log(err);
    }
)

module.exports= sequelize;