const express = require('express')
const cors = require('cors')
const fs = require('fs')
const CvIkerData = require ('./data/cv/iker-sastre.json')
const Router = require('./router')

const app = express()

app.use(cors())


app.get('/get-data', function(req, res) {
  res.json( CvIkerData )
})

app.use(Router.user)
app.use(Router.cvData)



console.log('API levantada en el puerto 3080')
app.listen(3080)