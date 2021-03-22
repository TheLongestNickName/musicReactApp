import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk'
import headReducer from "./head-reducer";

let reducers = combineReducers({
    album: headReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;