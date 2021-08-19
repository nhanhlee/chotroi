const express = require("express")
const app = express()
const router = require("./routers/index")
require('./common/db_connection')

app.use('/',router)

app.listen(3000)