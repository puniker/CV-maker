const express = require('express')
const UserData = require ('../data/users/user-list.json')

const app = express()

app.get('/login', function (request, res) {

    var username = request.query.username,
        password = request.query.password,
        response = {
            "access" : false
        }

    const result = UserData.users.find( user => user.username == username )
    if ( typeof result !== 'undefined' ) {
        console.log( result )
        response = {
            "access" : true,
            "userData" : result
        }
    } else {
        console.log('Usuario no encontrado')
        response.error = 'Usuario no encontrado'
    }

    return res.json( response )
    
}) 

module.exports = app