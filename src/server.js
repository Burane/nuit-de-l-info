
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 3000

//DB Connect
mongoose.connect('mongodb://localhost/501', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})