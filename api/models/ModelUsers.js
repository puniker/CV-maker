const connection = require('./connection')


const UserList = () => {

    const sql = `SELECT * FROM cv_users`
    return new Promise( resolve => {
        connection.query(sql, (err, results, fields) => {
            if ( err ) console.log(err)
            resolve( results )
        })
    })

}


const UserExists = ( username ) => {
    
    return new Promise(resolve => {
        
        connection.query(`SELECT * FROM cv_users WHERE username = "${username}"`, (err, results) => {
    
            if ( typeof results !== 'undefined' && results.length > 0 ) {
                resolve(true)
            } else {
                resolve(false)
            }
            
            
        })

    })
}

module.exports = { UserList, UserExists }