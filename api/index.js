const express = require('express')
const cors = require('cors')
const CvIkerData = require ('./data/cv/iker-sastre.json')
const CvData = require ('./data/cv/cv-data.json')
const UserData = require ('./data/users/user-list.json')
const app = express()

app.use(cors())

//app.get('/', function (req, res) {
//  res.send('Hello World')
//})

app.get('/get-data', function(req, res) {
  res.json( CvIkerData )
})

app.get('/login', (req, res) => {
  //console.log( req.query )
  var data = UserData.users,
      username = req.query.username,
      password = req.query.password,
      response = {
        "access" : false
      }

  data.map( u => {
    if( u.username == username) {

      if( u.password == password ) {
        response.access = true
        response.userData = u
        res.json( response )

      } else {
        response.error = 'Contraseña incorrecta.'
      }

    } else {
      response.error = 'Usuario no registrado.'
    }

  })
  res.json( response )


})

app.get('/cv-data', (req, res) => {
  var userID = req.query.userID
  var data = CvData.data

  data.map( d => {
    if( d.uuid == userID ) {
      res.json( {"data": d} )
    }
  })

})
console.log('API levantada en el puerto 3080')
app.listen(3080)