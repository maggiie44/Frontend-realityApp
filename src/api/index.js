import axios from "axios";


export const client = axios.create({
    baseURL: 'http://localhost:4000'
})


export const getRecords = async ()=>{
    const response = await client.get('/users/me/records')
    return response
}


