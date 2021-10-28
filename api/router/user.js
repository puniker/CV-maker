const express = require('express')
const UserData = require ('../data/users/user-list.json')

const app = express()

app.get('/login', function (request, res) {

    var username = request.query.username,
        password = request.query.password,
        response = {
            "access" : false
        }

    UserData.users.map( u => {
        if( u.username == username) {

        if( u.password == password ) {
            response.access = true
            response.userData = u
            //res.json( response )
            return res.json( response )

        } else {
            response.error = 'Contraseña incorrecta.'
        }

        } else {
        response.error = 'Usuario no registrado.'
        }

    })
    //res.json( response )


    return res.json( response )
    
}) 

module.exports = app