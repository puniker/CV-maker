const connection = require('./connection')

async function full_data (id, callback) {

    const response = {}
    general(id, (res) => {
        response.general = res
        callback (response)
    })

}

function general (id, callback) {

    connection.query(`SELECT * FROM cv_data_general WHERE id = ${id}`, (err, result, fields) => {
        if (err) {
        }
        //console.log( result[0] )
        if ( typeof result !== 'undefined' && result.length > 0 ) {
            //response.general = result[0]
            callback( result[0] )
        }
    })

}

module.exports = { full_data }