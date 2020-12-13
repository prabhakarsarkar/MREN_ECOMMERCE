
import {combineReducers } from "redux";
import authReducer from "../Reducer/authReducer";
import categoryReducer from "../Reducer/categoryReducer";
import ordersReducer from "../Reducer/ordersReducer";
import productReducer from "../Reducer/productReducer";
import signupReducer from "../Reducer/signupReducer";
import userReducer from "../Reducer/userReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    signup:signupReducer,
    category:categoryReducer,
    Product:productReducer,
    User:userReducer,
    order:ordersReducer

})


export default rootReducer;