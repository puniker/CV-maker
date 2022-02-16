import axios from "axios"

function GetGeneralData (userId) {
    return axios.get( `${import.meta.env.VITE_API_URL}/api/cv-data-general`, {
        params: {
            userID: userId
        }
    })
}

function SaveGeneralData (data, userId) {

    return axios.get(`${import.meta.env.VITE_API_URL}/api/cv-data-general/update`, {
        params: {
            user_id: userId,
            nombre: data.nombre,
            apellido: data.apellido,
            telefono: data.telefono,
            email: data.email,
            fecha_nacimiento: data.fecha_nacimiento,
            direccion: data.direccion,
            lugar_nacimiento: data.lugar_nacimiento,
            c_postal: data.c_postal,
            ciudad_pueblo: data.ciudad_pueblo,
            genero: data.genero,
            nacionalidad: data.nacionalidad,
            estado_civil: data.estado_civil,
            sitio_web: data.sitio_web,
            linkedin: data.linkedin,
            twitter: data.twitter,
            texto_descriptivo: data.texto_descriptivo 
        }
    })

}

function GetEstudiosData (userId) {
    
    return axios.get( `${import.meta.env.VITE_API_URL}/api/cv-estudios`, {
        params: {
            userID: userId
        }
    })

}
function SaveEstudiosData (data, userId) {
    
    return axios.get(`${import.meta.env.VITE_API_URL}/api/cv-estudios/update`, {
        params: {
            user_id: userId,
            data: data
        }
    })

}
function RemoveEstudiosData (id) {
    
    return axios.get(`${import.meta.env.VITE_API_URL}/api/cv-estudios/delete`, {
        params: {
            id: id,
        }
    })

}

function GetExperienciaData (userId) {
    
    return axios.get( `${import.meta.env.VITE_API_URL}/api/cv-experiencia`, {
        params: {
            userId: userId
        }
    })

}
function SaveExperienciaData (data, userId) {
    return axios.get(`${import.meta.env.VITE_API_URL}/api/cv-experiencia/update`, {
        params: {
            user_id: userId,
            data: data
        }
    })

}
function RemoveExperienciaData (id) {
    return axios.get(`${import.meta.env.VITE_API_URL}/api/cv-experiencia/delete`, {
        params: {
            id: id,
        }
    })
}

export default {
    SaveGeneralData,
    GetGeneralData,
    GetEstudiosData,
    SaveEstudiosData,
    RemoveEstudiosData,
    GetExperienciaData,
    SaveExperienciaData,
    RemoveExperienciaData
}