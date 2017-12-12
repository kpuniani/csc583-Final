var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Schema   = new Schema({
    name: String,
    email: String,
    phone: Number,
    company: String,
    officialVisit : Boolean,
    escortRequired : Boolean,
    escortName : String
});

module.exports = mongoose.model('User', Schema);