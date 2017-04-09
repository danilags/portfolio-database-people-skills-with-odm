var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillSchema = new Schema({
  name  : {type: String, unique: true},
  score : Number
})

var Skill = mongoose.model('Skill', skillSchema)

module.exports = Skill
