import React from 'react'
import '../style/products.css'
import { useEffect } from 'react'
import { useProduct } from '../hooks/useProduct'
import { useSelector } from 'react-redux'

const Products = () => {

    const { handleGetAllProducts } = useProduct()
    const data = useSelector((state) => state.ProductReducer.Products)
    const loading = useSelector((state) => state.ProductReducer.loading)


    useEffect(() => {
        handleGetAllProducts()

    }, [])

    if (loading) {
        return <div>Data is Loading</div>
    }

    return (
        <div className="products">
            <div className='allProducts'>
                {data?.products?.map((pro,idx) => {
                    return <div key={idx} className='product'>
                        <div className='imageBox'>
                            <img src={pro.images[0]} alt="" />
                        </div>
                        <div className='productBottom'>
                            <div className='productBottomRight'>
                                <h1>{pro.name}</h1>
                                <p>{pro.name} <span>{pro.price[0].amount}{pro.price[0].currency}</span></p>
                            </div>
                            <div className='ProductBottomLeft'>
                                <button>Add</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products