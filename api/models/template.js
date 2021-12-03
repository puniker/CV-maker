const connection = require('./connection')


const TemplatesList = () => {

    const sql = `SELECT * FROM cv_plantillas WHERE status = 1`
    return new Promise( resolve => {
        connection.query(sql, (err, results, fields) => {
            if ( err ) console.log(err)
            resolve( results )
        })
    })

}

const GetTemplate = (id) => {

    const sql = `SELECT * FROM cv_plantillas WHERE id = "${id}"`
    return new Promise( resolve => {
        connection.query(sql, (err, results, fields) => {
            if ( err ) console.log(err)

            resolve( results[0] )
        })
    })

}

module.exports = {TemplatesList, GetTemplate}