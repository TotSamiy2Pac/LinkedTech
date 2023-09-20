import {ADD_CART, CLOSE, DELETE_CART, GET_PRODUCTS, OPEN, PRODUCT_PAGE} from "../types/types";


const initialState = {
    products: [],
    product: {},
    carts: [],
    isOpen: false
}

export default function  productsReducer (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.payload}
        case PRODUCT_PAGE:
            return {...state, product: action.payload}
        case OPEN:
            return {...state, isOpen: true}
        case CLOSE:
            return {...state, isOpen: false}
        case ADD_CART:
            return {...state, carts: [...state.carts, action.payload]}
        case DELETE_CART:
            return {...state, carts: state.carts.filter(item => item.id !== action.payload.id)}
        default:
            return state
    }
}