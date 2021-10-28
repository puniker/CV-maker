const fs = require('fs')
const express = require('express')

const app = express()
const allFields = [
  'nombre',
  'apellido',
  'telefono',
  'email'
]

const readFile = '/home/iker/dev/cv-maker/api/data/cv/cv-data.json'

app.get('/cv-data', (req, res) => {
    var userID = req.query.userID
    var data = JSON.parse ( fs.readFileSync( readFile ) )

    res.json ( {"data": data.find((element) => element.uuid == userID) } ) 
  
})

app.post('/update', (req, res) => {

  console.log(req.query)
  var file = JSON.parse ( fs.readFileSync( readFile ) ),
      uuid = 1

  const indexData = file.findIndex( (element) => element.uuid == uuid )

  allFields.forEach(element => {
    console.log( element )
    file[indexData][element] = req.query[element]
  })

  fs.writeFileSync( readFile, JSON.stringify(file) )
  res.json('updated')

})
  
module.exports = app