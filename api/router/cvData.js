const express = require('express')
const CvData = require ('../data/cv/cv-data.json')

const app = express()


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

    var nombre = 'nuevo',
        apellido = 'el nuevo'
  
  
  
    res.json('Se ha actualizado')
    
})
  
module.exports = app