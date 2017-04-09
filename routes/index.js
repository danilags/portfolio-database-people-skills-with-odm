const express = require('express');
const router = express.Router();
const contUser = require('../controllers/users')
const contSkill = require('../controllers/skill')


// User
router.get('/users', contUser.getAll)
router.post('/users', contUser.createUser)
router.put('/users/:id', contUser.updateSkill)


// Skill
router.get('/skills', contSkill.getAll)
router.post('/skills', contSkill.createSkill)

// seed User
router.post('/users/seed', contUser.seedUser)
// seed Skill
router.post('/skills/seed', contSkill.seedSkill)

module.exports = router
