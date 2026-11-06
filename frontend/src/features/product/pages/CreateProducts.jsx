import React from 'react'
import '../style/createProduct.css'

const CreateProducts = () => {

   function formHandle(e) {
    e.preventDefault()
    console.log('form submited')
  }

  return (
    <div className='createProduct'>
      <p>seller studio</p>
      <h1>Add product</h1>


      {/* create product */}
      <div className='productForm'>
        <form action="">
          <label className='imagelable' >
            Click to upload a product photo
            <input type="file" />
          </label>
          <label htmlFor="">
            product name
            <input type="text" placeholder='T-Shirt' />
          </label>
          <label htmlFor="">
            price
            <input type="number" placeholder='Number' />
          </label>
          <label htmlFor="">
            catagry
            <input type="text" placeholder='T-Shirt' />
          </label>
          <label htmlFor="">
            description
            <input type="text" placeholder='Trending Shirt Etc.' />
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