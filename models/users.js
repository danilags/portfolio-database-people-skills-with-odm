var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name   : String,
  skills : [{type : Schema.Types.ObjectId, ref: 'Skill'}]
})

var User = mongoose.model('User', userSchema)

module.exports = User
