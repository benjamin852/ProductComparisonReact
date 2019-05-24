import { combineReducers } from "redux";

import productsReducer from './ProductsReducer'

const combinedReducers = combineReducers({
    productsReducer
})

export default combinedReducers