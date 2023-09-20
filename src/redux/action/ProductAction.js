import axios from "axios";
import {GET_PRODUCTS} from "../types/types";
export const getProducts = () => {
    return (dispatch) => {
        axios(`https://dummyjson.com/products?limit=6`)
            .then(({data}) => dispatch({type: GET_PRODUCTS, payload: data.products}))
    }
}
