const express = require('express')
const router = express.Router()
const repoRoutes = require("./repo.routes")
router.use("/github", repoRoutes)
module.exports = router