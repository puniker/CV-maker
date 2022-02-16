const express = require('express')
const connection = require ('../models/connection')
const {CvDataGeneral, CvDataEstudios, CvDataExperiencia} = require('../models/cv-data')
const {BasicSql} = require('../controller/SqlController')

const app = express()
const allFields = [
  'nombre',
  'apellido',
  'telefono',
  'email',
  'fecha_nacimiento',
  'imagen_perfil',
  'direccion',
  'lugar_nacimiento',
  'c_postal',
  'ciudad_pueblo',
  'genero',
  'nacionalidad',
  'estado_civil',
  'sitio_web',
  'linkedin',
  'twitter',
  'texto_descriptivo'
]



app.get('/cv-data-general', async (req, res) => {

  const userId = req.query.userID
  const data = await CvDataGeneral(req.query.userID)
  res.json( data )

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
      WHERE id = "${post_data.user_id}" 
    `

    connection.query(sql, (err, result, fields) => {
      if (err) {
        console.log( err )
      } else {
        res.json('updated')
      }
    })


})

app.get('/cv-estudios', async (req, res) => {

  const userId = req.query.userID
  const data = await CvDataEstudios(userId)

  res.json(data)

})

app.get('/cv-estudios/update', async (req, res) => {
  const req_data = req.query.data
  const user_id = req.query.user_id

  const parse_data = req_data.map(element => { return JSON.parse(element) })

  let queryResult = 'Error'
  parse_data.forEach(element => {

    const sql = `
      INSERT INTO cv_data_estudios (target_id, ${Object.keys(element).toString()}) 
      VALUES ("${user_id}", "${Object.values(element).join('","')}")
      ON DUPLICATE KEY 
      UPDATE ${Object.keys(element).map(item => { return `${item}="${element[item]}"` })}
    `
    BasicSql(sql, (resultado) => { queryResult = resultado })
  })
  res.json({queryResult})

})

app.get('/cv-estudios/delete', (req, res) => {

  const row_id = req.query.id

  sql = `DELETE FROM cv_data_estudios WHERE id = "${row_id}"`
  connection.query(sql, (err) => {
    if ( err ) {
      console.log( err )
    } else {
      console.log('registro borrado')
      res.json('updated')
    }
  })

})

app.get('/cv-experiencia', async (req, res) => {

  const userID = req.query.userId
  const data = await CvDataExperiencia(userID)
  res.json( data )

})

app.get('/cv-experiencia/update', (req, res) => {
  const req_data = req.query.data
  const user_id = req.query.user_id

  const parse_data = req_data.map(element => { return JSON.parse(element) })

  let queryResult = 'Error'
  parse_data.forEach(element => {

    const sql = `
      INSERT INTO cv_data_experiencia (target_id, ${Object.keys(element).toString()}) 
      VALUES ("${user_id}", "${Object.values(element).join('","')}")
      ON DUPLICATE KEY 
      UPDATE ${Object.keys(element).map(item => { return `${item}="${element[item]}"` })}
    `
    BasicSql(sql, (resultado) => { queryResult = resultado })
  })
  res.json({queryResult})

})

app.get('/cv-experiencia/delete', (req, res) => {

  const row_id = req.query.id

  sql = `DELETE FROM cv_data_experiencia WHERE id = "${row_id}"`
  connection.query(sql, (err) => {
    if ( err ) {
      console.log( err )
    } else {
      console.log('registro borrado')
      res.json('updated')
    }
  })

})

  
module.exports = app