var express = require('express')
var bodyParser= require('body-parser')
var app = express()
var cors = require('cors');

var mongo = require('mongodb').MongoClient
var mongoose = require('mongoose');
//var User = require('./src/models/User.js');
var mongoDB = 'mongodb://127.0.0.1/users';
var userReg = require('./src/endpoints/register');;
var allUsers = require('./src/endpoints/allusers')

app.use(cors())
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));



mongoose.connect(mongoDB, {useMongoClient: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;


app.post('/user', userReg);
app.get('/users', allUsers);
app.listen(4000, function() {
    console.log('listening on 4000')
})
