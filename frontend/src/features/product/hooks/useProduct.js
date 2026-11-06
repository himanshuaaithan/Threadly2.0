import { getAllProducts } from "../services/api.service";
import { useDispatch } from "react-redux";
import { setProductsData, setLoading } from "../state/Product.slice";


export function useProduct() {

    const dispatch = useDispatch()

    const handleGetAllProducts = async () => {
        dispatch(setLoading(true))
        const { data } = await getAllProducts()
        dispatch(setProductsData(data))
        dispatch(setLoading(false))
        return data
    }

    return {
        handleGetAllProducts
    }
}