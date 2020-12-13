
import React from 'react'
import './Header.css'
import {useDispatch, useSelector} from 'react-redux'
import { getProductByCatetegoryIdAction } from '../../Redux/Action';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    console.log(props)
    const dispatch = useDispatch();
   const getProductBYCategoryId=(id)=>{
    dispatch(getProductByCatetegoryIdAction(id));
    
    props.history.replace("/product/getByCategory")
   }
       


    const category = useSelector(state => state.category.categories)
    return (
        <div className="header text-center">
            {category.map(cate=>
            <ul onClick={()=>getProductBYCategoryId(cate._id)}>{cate.Name}</ul>
            )}
        </div>
    )
}

export default withRouter(Header)
