var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//setup mongoose model and export
module.exports = mongoose.model('User', new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
}));