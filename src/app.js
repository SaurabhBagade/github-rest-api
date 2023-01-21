const express = require("express");
const app = express();
const routes = require("./routes")
const cors = require('cors')
const helmet = require("helmet")
const compression = require("compression");

app.use(helmet())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors())
app.options("*", cors());

app.use("/v1", routes)

module.exports = app