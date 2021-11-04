const fs = require('fs')
const express = require('express')

const app = express()
const allFields = [
  'nombre',
  'apellido',
  'telefono',
  'email',
  'fecha_nacimiento',
  'direccion',
  'lugar_nacimiento',
  'c_postal',
  'ciudad_pueblo',
  'genero',
  'nacionalidad',
  'estado_civil',
  'sitio_web',
  'linkedin',
  'twitter'
]

const readFile = '/home/iker/dev/cv-maker/api/data/cv/cv-data.json'

app.get('/cv-data', (req, res) => {
    var userID = req.query.userID
    var data = JSON.parse ( fs.readFileSync( readFile ) )

    res.json ( {"data": data.find((element) => element.uuid == userID) } ) 
  
})

app.get('/update', (req, res) => {

  console.log(req.query)
  var file = JSON.parse ( fs.readFileSync( readFile ) ),
      uuid = req.query.uuid

  const indexData = file.findIndex( (element) => element.uuid == uuid )

  allFields.forEach(element => {
    //console.log( element )
    //if ( req.query[element] ) {
      file[indexData][element] = req.query[element]
    //}
  })
console.log( file )
  fs.writeFileSync( readFile, JSON.stringify(file) )
  res.json('updated')

})
  
module.exports = app