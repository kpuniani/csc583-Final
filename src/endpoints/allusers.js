const express = require('express');
 var   router = express.Router();
  var  User = require('../models/User');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/users';

mongoose.connect(mongoDB, {useMongoClient: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;



function allUsers (request, response) {
    User.find({}, function(err,users){
        if (err) throw err;
        else {
            var userMap = {};
            users.forEach(function(user) {
                userMap[user._id] = user;
            });
            response.send(JSON.stringify(users));
        }
    })
}

module.exports = allUsers;
