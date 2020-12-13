import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from '../../Redux/Action/productAction'
import Home from '../Home/Home'
import './productHomePage.css'

const ProductPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductAction())
    }, [])
    const product = useSelector(state => state.product.product)
    return (
        <Home>
            <div>
                <div className="container text-center">
                    <div className='row'>
                        {product.map(product =>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                                <hr style={{ border: "1px solid black" }}></hr>
                                <div className="card text-center" >
                                    <div className="text-center">
                                        <img className="productImage"
                                            src={product.image}
                                            alt="categoryImg" />
                                    </div>
                                    <br></br>
                                    <h6 className="productPrice">price {product.price}</h6>
                                    <p className="productName">{product.name}</p><br></br> 
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Home>
    )
}

export default ProductPage
