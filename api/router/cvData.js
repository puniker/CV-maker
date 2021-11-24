const fs = require('fs')
const express = require('express')
const CvFileData = require ('../data/cv/cv-data.json')
const connection = require ('../models/connection')

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
const allFieldsEstudios = [
  'id',
  'order',
  'centro',
  'lugar',
  'fecha_inicio',
  'fecha_fin',
  'descripcion',
  'orden',
]

const readFile = '/home/iker/dev/cv-maker/api/data/cv/cv-data.json'


app.get('/cv-data-general', (req, res) => {

  var userId = req.query.userID
  
  connection.query(`SELECT * FROM cv_data_general WHERE id = ${userId}`, (err, result, fields) => {
    if (err) {
      console.log( err )
    }
    if ( typeof result !== 'undefined' && result.length > 0 ) {
      res.json( result[0] )
    }
  })

})

app.get('/cv-data-general/update', (req, res) => {

    const post_data = req.query
    
    const sql = `
      UPDATE cv_data_general
      SET 
      ${allFields.map((element) => { 
        if ( post_data[element] ) {
          return `${element} = '${post_data[element]}'`
        } else {
          return `${element} = ''`
        }
      } )  }
      WHERE id = ${post_data.user_id} 
    `

    connection.query(sql, (err, result, fields) => {
      if (err) {
        console.log( err )
      } else {
        res.json('updated')
      }
    })


})

app.get('/cv-estudios', (req, res) => {

  const userId = req.query.userID

  const sql = `SELECT * FROM cv_data_estudios WHERE target_id = ${userId} ORDER BY orden ASC`

  connection.query(sql, (err, result, fields) => {
    if ( err ) {
      console.log( err )
    } else {
      res.json(result)
    }

  })

})

app.get('/cv-estudios/update', (req, res) => {


})

  
module.exports = app