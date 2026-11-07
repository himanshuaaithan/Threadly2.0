import axios from 'axios'


// const api = axios.create({
//     baseURL:'http//localhost:3000'
// })

export async function getAllProducts() {
    const response = await axios.get('http://localhost:3000/api/products/getAllProducts')
    return response
}


export async function createProduct(formData) {
    const response = await axios.post('http://localhost:3000/api/products/createProduct', formData)
    console.log(`response from service file createProduct function: ${response}`)
    return response
}
