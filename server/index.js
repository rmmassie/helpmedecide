require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db')
const user = require('./controllers/usercontroller')
const poll = require('./controllers/pollcontroller')

sequelize.sync()

let PORT = 3001

app.use(express.json());

app.use('/user', user)
app.use('/poll', poll)

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
})
