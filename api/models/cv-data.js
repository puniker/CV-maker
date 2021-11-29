const connection = require('./connection')

async function CvFullData (id, callback) {

    const response = {}

    response.general = await CvDataGeneral(id)
    response.estudios = await CvDataEstudios(id)

    callback( response )
    
}

const CvDataGeneral = ( id ) => {

    const sql = `SELECT * FROM cv_data_general WHERE id = ${id}`
    return new Promise(resolve => {
        connection.query(sql, (err, result, fields) => {
            if (err) console.log( err )
            if ( typeof result !== 'undefined' && result.length > 0 ) {
                resolve(result[0])
            }
        })
    })

}

const CvDataEstudios = ( id ) => {

    const sql = `SELECT * FROM cv_data_estudios WHERE target_id = ${id} ORDER BY orden ASC`
    return new Promise(resolve => {

        connection.query(sql, (err, result, fields) => {
            if ( err ) {
            console.log( err )
            } else {
            resolve(result)
            }
        })

    })

}

const CvDataExperiencia = ( id ) => {
   
    const sql = `SELECT * FROM cv_data_experiencia WHERE target_id = ${id} ORDER BY orden ASC`
    return new Promise(resolve => {

        connection.query(sql, (err, result, fields) => {
            if ( err ) {
            console.log( err )
            } else {
            resolve(result)
            }
        })

    }) 
}


module.exports = { CvFullData, CvDataGeneral, CvDataEstudios, CvDataExperiencia }