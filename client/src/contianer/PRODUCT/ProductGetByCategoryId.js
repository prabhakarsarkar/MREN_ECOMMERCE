import { useSelector } from 'react-redux'
import React from 'react'
import Home from '../Home/Home';
import "./productGetByCategoryId.css"
import Modal from '../../compoents/Modal'


const ProductGetByCategoryId = () => {
    const [product, setProduct] = React.useState([])
    const state = useSelector(state => state.getProductById.GetproductById);

    React.useEffect(() => {
        setProduct(state && state.data ? state.data : [])
    }, [state])
        ;

    const ProductListing = () => {
        return product.map((item, i) => {
            return (

                <div className="container">

                    <div className="row" key={i}>

                        <div className="col-2">
                            <hr style={{ border: "2px solid black" }}></hr>
                            <div className="card productCategoryCard ">
                                <div className="Image my-2">
                                    <img className="categoryProductImage"
                                        src={item.image}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card ">
                                <div className="categoryProductDetailes">
                                    {item.name}
                                </div>
                                <div className="my-3">
                                    <ul >
                                        <li className='my-1'>{item.rom_ram}</li>
                                        <li className='my-1'>{item.battery}</li>
                                        <li className='my-1'>{item.camera}</li>
                                        <li className='my-1'>{item.display}</li>
                                        <li className='my-1'>{item.processor}</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-3">
                            <div className="card ">
                                <div className="categoryProductPrice">
                                ₹{item.price}
                                    <Modal className="text-center" productId={item._id}/>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>

            )
        })
    }

    return (
        <Home>
            <div>
                {
                    !product.length ?
                        <h3 className="text-muted text-center p-5" >No Product Found!</h3>
                        : <ProductListing />
                }
            </div>
        </Home>
    )
}

export default ProductGetByCategoryId
