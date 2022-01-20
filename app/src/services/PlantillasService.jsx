import axios from "axios"

export function GetAllTemplatesService () {
    return axios.get(`${import.meta.env.VITE_API_URL}/api/plantillas`)
}