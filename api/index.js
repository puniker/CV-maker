const express = require('express')
const cors = require('cors')
const fs = require('fs')
const CvIkerData = require ('./data/cv/iker-sastre.json')
const CvData = require ('./data/cv/cv-data.json')
const UserData = require ('./data/users/user-list.json')
const Router = require('./router')

const app = express()

app.use(cors())

//app.get('/', function (req, res) {
//  res.send('Hello World')
//})

app.get('/get-data', function(req, res) {
  res.json( CvIkerData )
})

app.use(Router.user)

app.get('/cv-data', (req, res) => {
  var userID = req.query.userID
  var data = CvData.data

  data.map( d => {
    if( d.uuid == userID ) {
      res.json( {"data": d} )
    }
  })

})

app.post('/update', (req, res) => {

  var data = CvData ,
      uuid = req.query.uuid,
      nombre = req.query.nombre

  var x = data.data.findIndex( item => item.uuid == uuid )
  data.data[x].nombre = nombre
  console.log( data.data[x] )
  
  //fs.writeFile('/home/iker/dev/cv-maker/api/data/cv/cv-data.json', JSON.stringify(data), err => {
  //  console.log( err )
  //})
  res.json('Se ha actualizado')
  

})


console.log('API levantada en el puerto 3080')
app.listen(3080)