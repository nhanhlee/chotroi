const express = require("express")
const app = express()
const router = require("./src/routers/index")
require('./src/common/db_connection')

app.use('/',router)

app.listen(3000)