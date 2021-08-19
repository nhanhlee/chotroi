const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_USERNAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});