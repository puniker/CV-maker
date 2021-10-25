const express = require('express')
const app = express()
const cors = require('cors')
 
app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})

const data = {
    "nombre"   : "Sonia",
    "apellido" : "Agorreta",
    "telefono" : "680983974",
    "email"    : "iker.sastre97@gmail.com",
}

app.get('/get-data', function(req, res) {
    res.json( data )
})
 
app.listen(3080)