const express = require("express")
const app = express()
const cors = require("cors")

app.get("/", function(req, res) {
  res.send({"name": "Jane Doe"}) // Should be json format
})

app.listen(3000, () => {
  console.log("app listening on port 3000")
})

app.use(cors())

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
