const express = require('express')
const connection = require('../models/connection')

const app = express()


app.get('/login', (request, res) => {

    var username = request.query.username,
        password = request.query.password,
        response = {
            "access" : false
        }

    connection.query(`SELECT * FROM cv_users WHERE username = "${username}" AND password = "${password}"`, (err, results, fields) => {

        if ( typeof results !== 'undefined' && results.length > 0 ) {
            console.log( 'Acceso permitido. ',results[0] )
            response = {
                "access" : true,
                "userData" : results[0]
            }
        } else {
            console.log('Contraseña incorrecta')
            response.error = 'Usuario o contraseña incorrectos'
        }
        
        return res.json( response )
        
    })

})

module.exports = app