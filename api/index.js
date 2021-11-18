const express = require('express')
const cors = require('cors')
const Router = require('./router')

const app = express()

app.use(cors())
app.use(express.static('../app/dist'))

app.use(Router.user)
app.use(Router.cvData)
app.use(Router.Plantillas)

app.listen(3080, () => { console.log('API levantada en el puerto 3080') })