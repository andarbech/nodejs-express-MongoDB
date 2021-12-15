const mongoose = require('mongoose');
const express = require('express');
const app = express();
// require('dotenv').config();


//Import Routes
const postRoutes = require('./routes/post')

app.use('/post', postRoutes)

app.get('/', (req, res) => {
    res.send('home');
})

//conectDB
// const key = process.env.DB_CONNECTION;
mongoose.connect(
    'mongodb://localhost:27017/workshop-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log('conected to DB')
)

//listening the server
app.listen(4000)