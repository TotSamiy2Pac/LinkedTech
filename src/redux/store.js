import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import productsReducer from "./reducer/productsReducer";


const store = createStore(
    combineReducers({
        productsReducer : productsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;