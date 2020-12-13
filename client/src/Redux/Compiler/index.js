import {combineReducers} from 'redux'
import  getProductByCatetegoryIdReducer  from "../Reducer/getProductByCategoryId";
import categoryReducer from '../Reducer/categoryReducer'
import productReducer from '../Reducer/productReducer'


const rootReducer = combineReducers({
    category:categoryReducer,
    product:productReducer,
    getProductById:getProductByCatetegoryIdReducer

})


export default rootReducer