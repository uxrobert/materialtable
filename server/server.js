const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const nodemon = require('nodemon');
// const port = process.env.PORT || 5000;
const moongoose = require('mongoose');
const db = require('./Config/db');
const User = require('./Models/Users');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('working')
});




app.post('/user', (req,res) => {
console.log(req.body);

});

app.post('/test', (req,res)=> {
  console.log('console');
})

app.listen( 5000,()=> {
    console.log(`Working on port: 5000`)
})


