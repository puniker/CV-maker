const express = require('express')
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
  const req_data = req.query.data
  const user_id = req.query.user_id

  const parse_data = req_data.map(element => { return JSON.parse(element) })
  console.log( parse_data )
  console.log( Object.values(parse_data[0]) )

  parse_data.forEach(element => {
    console.log( element )
    const sql = `
      INSERT INTO cv_data_estudios (target_id, ${Object.keys(element).toString()}) 
      VALUES (${user_id}, "${Object.values(element).join('","')}")
      ON DUPLICATE KEY 
      UPDATE ${Object.keys(element).map(item => { return `${item}="${element[item]}"` })}
    `
    //console.log( sql )
    connection.query(sql, (err, result, fields) => {
      if ( err ) {
        console.log( err )
      } else {
        console.log('todo ok', result)
      }
    })
  })

})

  
module.exports = app