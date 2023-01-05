import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import mainReducer from "./mainReducer";
import headReducer from "./headReducer";


let reducers = combineReducers({
    headReducer,
    mainReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
