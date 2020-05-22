const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemon = require('nodemon');
// const port = process.env.PORT || 5000;
const moongoose = require('mongoose');
const db = require('./Config/db');
const User = require('./Models/Users');
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('working');
});




app.post('/user', (req,res) => {

  let newSignups = new User(req.body)

  newSignups.save((err,data) => {
    if(err){
      return res.json({success:false, err:err});
    }
  
  res.json({success:true, data:data})

});

});



// get akll users
app.get('/users', (req, res) => {
  User.find({},(err,data)=> {if(err){
    return res.json({success:false, err:err});
  }
  // console.log(data)
  res.json({success:true,data:data});
  
  
  });
 });





//  server.get('/usersList', function(req, res) {
//   User.find({}, function(err, users) {
//     var userMap = {};

//     users.forEach(function(user) {
//       userMap[user._id] = user;
//     });

//     res.send(userMap);  
//   });
// });

// app.post('/test', (req,res)=> {
//   console.log('console');
// })

app.listen(5000,()=> {
    console.log(`Working on port: 5000`)
})


