require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Router = require('./router')
const connection = require('./models/connection')

const app = express()

app.use(cors())
app.use(express.static('./dist'))

connection.connect(function(err) {
    if (err) throw err
    console.log("Conectado a la bbdd.")
})

app.use('/api', Router.user)
app.use('/api', Router.cvData)
app.use('/api', Router.Plantillas)

app.use('/api/template', Router.PlantillaPreview)

app.listen(process.env.PORT, () => { console.log(`API levantada en el puerto ${process.env.PORT}`) })