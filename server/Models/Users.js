const express = require('express');
const mongoose =require('mongoose');

let userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    favoritedish: String,
    favoritegame: String

  })


  module.exports = mongoose.model('User', userSchema)
