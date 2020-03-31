require('dotenv').config();
const express = require('express');
const app = express();
const user = require('./controllers/usercontroller');
const sequelize = require('./db');
let PORT = 3001

sequelize.sync();
app.use(express.json());
app.use('/user', user);

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
})
