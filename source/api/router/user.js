const { v4: uuidv4 } = require('uuid')
const express = require('express')
const connection = require('../models/connection')
const {UserExists, UserList} = require('../models/ModelUsers')
const app = express()


app.get('/login', (request, res) => {

    var username = request.query.username,
        password = request.query.password,
        response = {
            "success" : false,
            "message" : ""
        }

    connection.query(`SELECT * FROM cv_users WHERE username = "${username}" AND password = "${password}"`, (err, results, fields) => {

        if ( typeof results !== 'undefined' && results.length > 0 ) {
            response = {
                "success" : true,
                "message" : "Acceso permitido.",
                "data" : results[0]
            }
        } else {
            console.log('Contraseña incorrecta')
            response.success = false
            response.message = 'Usuario o contraseña incorrectos'
        }
        return res.json( response )
        
    })

})

app.get('/admin/users/register', async (req, res) => {

    const new_user_data = {
        id: uuidv4(),
        username: req.query.username,
        password: req.query.password,
        nombre: req.query.nombre,
        apellido: req.query.apellido,
        email: req.query.email,
        status: 1,
        is_admin: 0
    }
    
    var respuesta = {
        "status": 0 
    }

    const exist = await UserExists(new_user_data.username)

    if (!exist) {
        const sql_insert_user = `
          INSERT INTO cv_users (id, username, password, status, is_admin) 
          VALUES ("${new_user_data.id}", "${new_user_data.username}", "${new_user_data.password}", ${new_user_data.status}, ${new_user_data.is_admin})
        `
        const sql_create_user_data = `
            INSERT INTO cv_data_general (id) 
            VALUES ("${new_user_data.id}")
        `
        connection.query(sql_insert_user, (err) => {
            if (err) {
                console.log(err)
            }
            connection.query(sql_create_user_data, (er) =>{
                if (er) {
                    console.log(er)
                }
                respuesta.status = 1
                respuesta.result = 'Usuario creado correctamente.'
                res.json(respuesta)
            })
        })

    } else {
        respuesta.result = 'El usuario ya existe.'
        res.json(respuesta)
    }

})

app.get('/admin/users/list', async (req, res) => {

    const list = await UserList()
    res.json( list )
})

module.exports = app