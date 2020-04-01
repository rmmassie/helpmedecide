require('dotenv').config();
const express = require('express');
const app = express();
const user = require('./controllers/usercontroller');
//const data = require('./controllers/datacontroller');
const sequelize = require('./db');

sequelize.sync();

app.use(express.json());
app.use(require('./middleware/header'));

app.use('/user', user);
app.use(require('./middleware/validate-session'));


app.listen(3001, function(){
    console.log('App is listening on:', process.env.PORT);
});