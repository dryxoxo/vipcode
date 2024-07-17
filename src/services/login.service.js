import axios from 'axios';

export const login = (payload, callback) => {
    axios.post('https://fakestoreapi.com/auth/login', payload).then((res, status)=>{
        callback(true, res.data.token)
    }
    ).catch((error)=>{
        
        callback(false, error.response.data)
    })
}