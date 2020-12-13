import {categoryConstants} from '../constiants/constiansts'

const initstate = {
    categories: [],
    loding: false,
    error: ''

}
const categoryReducer = (state = initstate, action) => {
    console.log(action.payload);
    switch (action.type) {
        case categoryConstants.GET_CATEGORY_SECCESS:
            state = {
                ...state,
                categories: action.payload,
                loding: false
            }
            break;
        case categoryConstants.GET_CATEGORY_FAILURE:
            state = {
                ...state,
                error: action.payload.error
            }
        }
        return state
    }

export default categoryReducer