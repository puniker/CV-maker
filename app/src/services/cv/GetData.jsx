import axios from "axios"

const endpoint = '/cv-data'

function GetData ( userID ) {
    
    //console.log('user id', userID)
    var returnData 

    axios.get(endpoint, {
        params:{
            userID: userID
        }
    })
    .then( (res) => {
        returnData = res.data.data
        //console.log( returnData )
        return returnData
    })
    .catch( ( error ) => {
        returnData = error
    })
    .then( () => {
        // code ...
    })

}

export default GetData
