const connection = require('../models/connection')

const BasicSql = async (sql, callback) => {

    //return New.Promise( (resolve, reject) => {
        connection.query(sql, (err) => {
            if(err) {
                console.log( 'Error on Sql')
                callback('Error')
            } else {
                callback('updated')
            }
        })
    //})

}

module.exports = {BasicSql}