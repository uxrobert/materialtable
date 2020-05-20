const express = require('express');
const mongoose =require('mongoose');

const mongoDB = 'mongodb+srv://digitalmediaflow:Moreno2g@signup-gdltf.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => {
    console.log('Database connection successful')});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


