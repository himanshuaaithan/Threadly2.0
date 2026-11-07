import { useState } from 'react'
import React from 'react'
import '../style/createProduct.css'
import { useProduct } from '../hooks/useProduct'

const CreateProducts = () => {

  // this is the function come form hook's folder useProduct.js file it's handle create product data 
  const { handleCreateProduct } = useProduct()

  // this is the states , who perform tow way binding in form
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([])
  const [catgry, setcatgry] = useState('')
  const [amount, setAmount] = useState()
  const [Size, setSize] = useState('')
  const [stock, setStock] = useState()


  //  this is formHandle , it's handle the page to relaod and create form data 
  // also it's call function to create prodcut
  async function formHandle(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', productName)
    formData.append('category', catgry)
    formData.append('description', description)
    formData.append('amount', amount)
    formData.append('size', Size)
    formData.append('stock', stock)
    image.forEach((file) => {
      formData.append('image', file)
    })

    await handleCreateProduct(formData)
  }


  return (
    <div className='createProduct'>
      <p>seller studio</p>
      <h1>Add product</h1>


      {/* create product */}
      <div className='productForm'>
        <form >


          {/* images input  */}
          <label className='imagelable' >
            Click to upload a product photo
            <input type="file" accept="image/*"
              multiple onChange={(e) => { setImage((prev) => [...prev, ...Array.from(e.target.files)]) }} />
          </label>

          {/* product name input  */}
          <label htmlFor="">
            product name
            <input type="text" placeholder='T-Shirt' onChange={(e) => { setProductName(e.target.value) }} />
          </label>


          {/* price input  */}
          <label htmlFor="">
            price
            <input type="number" placeholder='Number' onChange={(e) => { setAmount(Number(e.target.value)) }} />
          </label>

          {/* catagry input */}
          <label htmlFor="">
            catagry
            <input type="text" placeholder='T-Shirt' onChange={(e) => { setcatgry(e.target.value) }} />
          </label>


          {/* description input */}
          <label htmlFor="">
            description
            <input type="text" placeholder='Trending Shirt Etc.' onChange={(e) => setDescription(e.target.value)} />
          </label>

          {/* size input */}
          <label htmlFor="">
            <input type="text" placeholder='X Xl XXL ' onChange={(e) => { setSize(e.target.value) }} />
          </label>

          {/* stock input */}
          <label htmlFor="">
            <input type="number" placeholder='stock' onChange={(e) => { setStock(Number(e.target.value)) }} />
          </label>
          {/* submit button */}
          <button onClick={(e) => {
            formHandle(e)
          }}>Publish product</button>
        </form>
      </div>
    </div>
  )
}

export default CreateProducts