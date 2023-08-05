import factReducer from "./factReducer";
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from "redux-thunk";
import breedsReducer from "./breedsReducer";

let reducers = combineReducers({
    factPage: factReducer,
    breedPage: breedsReducer
})

const middleware = thunk

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, undefined, composeEnhancers(applyMiddleware(middleware)))

export default store