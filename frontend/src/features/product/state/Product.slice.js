import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        Products: [],
        loading: false
    },
    reducers: {
        setProductsData: (state, action) => {
            state.Products = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setProductsData, setLoading } = ProductSlice.actions

export default ProductSlice.reducer