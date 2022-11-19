import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { authReducer } from './reducer/userReducer';
import { newProductReducer, productDetailsReducer, productReducer, productsReducer } from './reducer/productsReducers';

const reducer= combineReducers ({
    auth: authReducer,
    newProduct: newProductReducer,
    products: productsReducer,
    product: productReducer,
    productDetails: productDetailsReducer
})

let initialState = {
}


const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;