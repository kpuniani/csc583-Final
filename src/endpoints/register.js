const express = require('express');
    var router = express.Router();
    var User = require('../models/User');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/users';

mongoose.connect(mongoDB, {useMongoClient: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;


function regUser(request, response) {
    console.log(request.body)
    var postUser = request.body;
    var user = new User();
    user.name = postUser.name;
    user.email = postUser.email;
    user.phone = postUser.phone;
    user.company = postUser.company;
    user.officialVisit = postUser.officialVisit;
    user.escortRequired = postUser.escortRequired;
    user.escortName = postUser.escortName;
    user.save(function(err) {
        if (err)
            response.send(err);
        response.json({ message: 'User created!' });
    });

}

module.exports = regUser;
