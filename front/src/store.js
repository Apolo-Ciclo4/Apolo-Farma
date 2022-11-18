import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { authReducer } from './reducer/userReducer';
import { newProductReducer } from './reducer/productsReducers';

const reducer= combineReducers ({
    auth: authReducer,
    newProduct: newProductReducer
})

let initialState = {
}


const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;