const db = require('../models/users')

let usersData = [
  {
    name    : "Daniel Agus",
    skills  : []
  },
  {
    name    : "Permadi Sidabutar",
    skills  : []
  }
]

let seedUser = function(req, res) {
  db.collection.insert(usersData, function(err, result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}


let getAll = function(req, res) {
  db.find().populate('skills').exec(function(err, skills) {
    if (!err) {
      res.send(skills)
    }
  })
}

let createUser = function(req, res) {
  db.create({
    name    : req.body.name,
    skills  : []
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

let updateSkill = function(req, res) {
  // console.log("test");
  db.findById(req.params.id, function(err, user) {
    if (err) {
      res.send(err)
    } else {
      if (user) {
        let count = 0
        user.skills.forEach(function(data) {

          if (data == req.body.skills) {
            count++
          }
        })
        if (count > 0) {
          res.send("Skill udah ada !")
        } else {
          db.update(req.params.id, {$push : {"skills" : req.body.skills}},
          {safe: true, upsert: true, new: true}, function(err, model) {
            if (err) {
              res.send(err)
            } else {
              res.send(model)
            }
          })
        }
      } else {
        res.send('User tidak ada !')
      }
    }
  })
}


module.exports = {
  seedUser,
  getAll,
  createUser,
  updateSkill
}
