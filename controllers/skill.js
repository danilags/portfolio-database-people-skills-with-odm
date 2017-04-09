const db = require('../models/skill')

let skillsData = [
  {
    name    : "JavaScripts",
    score   : 80
  },
  {
    name    : "PHP",
    score   : 50
  }
]

let seedSkill = function(req, res) {
  db.collection.insert(skillsData, function(err, result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

let getAll = function(req, res) {
  db.find(function(err, skills) {
    if (!err) {
      res.send(skills)
    }
  })
}

let createSkill = function(req, res) {
  db.create({
    name    : req.body.name,
    score   : req.body.score
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}


module.exports = {
  seedSkill,
  getAll,
  createSkill
}
