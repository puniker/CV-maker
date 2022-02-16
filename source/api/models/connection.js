const mysql = require('mysql')

const config = {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    socketPath: process.env.DB_SOCKETPATH
}

const connection = mysql.createConnection( config );

module.exports = connection