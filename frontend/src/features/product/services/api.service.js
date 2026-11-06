import axios from 'axios'


// const api = axios.create({
//     baseURL:'http//localhost:3000'
// })

export async function getAllProducts() {
    const response = await axios.get('http://localhost:3000/api/products/getAllProducts')
    return response 
}