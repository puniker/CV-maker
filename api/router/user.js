const express = require('express')
const UserData = require ('../data/users/user-list.json')

const app = express()

app.get('/login', function (request, res) {

    var username = request.query.username,
        password = request.query.password,
        response = {
            "access" : false
        }

    const result = UserData.users.findIndex( user => user.username == username )
    if ( typeof result !== 'undefined' && result >= 0 ) {
        if ( UserData.users[result].password == password ) {
            console.log( result )
            response = {
                "access" : true,
                "userData" : result
            }
        } else {
            console.log('Contraseña incorrecta')
            response.error = 'Contraseña incorrecta'
        }
    } else {
        console.log('Usuario no encontrado')
        response.error = 'Usuario no encontrado'
    }

    return res.json( response )
    
}) 

module.exports = app