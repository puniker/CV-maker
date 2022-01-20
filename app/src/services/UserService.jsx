import axios from "axios"

export function UserLoginService (username, password) {
    
    return axios.get(`${import.meta.env.VITE_API_URL}/api/login`, {
        params: {
          username: username,
          password: password
        }
    })

}

