import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../features/product/state/Product.slice'

export const store = configureStore({
    reducer: {
        ProductReducer
    }
})