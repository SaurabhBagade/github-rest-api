const express = require('express')
const router = express.Router()
const gitRepoController = require("../controllers/gitRepo.controller")

router.get("/get-repos/:user", gitRepoController.getRepos)

router.get("/get-personal-info/:user", gitRepoController.getPersonalInfo)

module.exports = router