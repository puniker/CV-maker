const express = require('express')
const cors = require('cors')
const CvIkerData = require ('./data/cv/iker-sastre.json')
const CvData = require ('./data/cv/cv-data.json')

const app = express()

app.use(cors())

//app.get('/', function (req, res) {
//  res.send('Hello World')
//})

app.get('/get-data', function(req, res) {
  res.json( CvIkerData )
})

app.get('/cv-data/:id', (req, res) => {
  var id = req.params.id
  var data = CvData.data

  data.map( d => {
    if( d.uuid == id ) {
      res.json( {"data": d} )
    }
  })

})
 
app.listen(3080)