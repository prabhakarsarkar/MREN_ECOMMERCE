import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminNavbar from '../../Compoents/Headers/AdminNavbar'
import { addProductAction, deleteProductAction, } from '../../Redux/Actions/productAction';


const ProductPage = () => {
    let count = 0
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [rom_ram ,setROM_RAM] =useState('')
    const [battery, setBattery] = useState("")
    const [camera ,setCamera] =useState('')
    const [display ,setDisplay] = useState('')
    const [processor,setProcessor]=useState('')

    const category1 = useSelector(state => state.category.categories)
    const product = useSelector(state => state.Product.product)
    console.log(product, "produet.......................");
    const dispatch = useDispatch();



    const addProduct = () => {
        const product = {
            name,
            price,
            quantity,
            image,
            description,
            category,
            rom_ram,
            battery,
            camera,
            display,
            processor
        }

        dispatch(addProductAction(product))
        // setCategory('')
        // setDescription('')
        // setImage('')
        // setQuantity('')
        // setPrice('')
        // setName('')
    }



    const deleteProduct = (id) => {
        dispatch(deleteProductAction(id))
    }

    return (
        <>
            <AdminNavbar />

            <br></br><br></br><br></br>
            <div className="container">
                <br></br>
                <button className="btn btn-primary category-button" data-toggle="modal" data-target="#ModalId">
                    Add prducts
               </button>
                <div className="modal fade " id="ModalId">
                    <div className="modal-dialog modal-dialog-centered ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title"> Add category</h3>
                                <button type="button" className="btn-close" data-dismiss="modal">&times; </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        className="form-control"
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />  <br></br>
                                    <label>price</label>
                                    <input
                                        type="text"
                                        value={price}
                                        className="form-control"
                                        placeholder="price"
                                        onChange={(e) => setPrice(e.target.value)}
                                    />  <br></br>
                                    <label>RAM ROM</label>
                                    <input
                                        type="text"
                                        value={rom_ram}
                                        className="form-control"
                                        placeholder="RAM_ROM"
                                        onChange={(e) => setROM_RAM(e.target.value)}
                                    />  <br></br>
                                    <label>Camera</label>
                                    <input
                                        type="text"
                                        value={camera}
                                        className="form-control"
                                        placeholder="Camera"
                                        onChange={(e) => setCamera(e.target.value)}
                                    />  <br></br>
                                     <label>Battery</label>
                                    <input
                                        type="text"
                                        value={battery}
                                        className="form-control"
                                        placeholder="Battery"
                                        onChange={(e) => setBattery(e.target.value)}
                                    />  <br></br>
                                     <label>display</label>
                                    <input
                                        type="text"
                                        value={display}
                                        className="form-control"
                                        placeholder="Display"
                                        onChange={(e) => setDisplay(e.target.value)}
                                    />  <br></br>
                                    <label>quantity</label>
                                    <input
                                        type="text"
                                        value={quantity}
                                        className="form-control"
                                        placeholder="quantity"
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />  <br></br>
                                     <label>Processor</label>
                                    <input
                                        type="text"
                                        value={processor}
                                        className="form-control"
                                        placeholder="quantity"
                                        onChange={(e) => setProcessor(e.target.value)}
                                    />  <br></br>
                                    <label>image</label>
                                    <input
                                        type="text"
                                        value={image}
                                        className="form-control"
                                        placeholder="image"
                                        onChange={(e) => setImage(e.target.value)}
                                    />  <br></br>
                                    <label>Description</label>
                                    <input
                                        type="text"
                                        value={description}
                                        className="form-control"
                                        placeholder="Description"
                                        onChange={(e) => setDescription(e.target.value)}
                                    /><br></br>
                                    <label> categoryId</label>
                                    <select
                                        className="form-control"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}

                                    >
                                        <option>select category</option>
                                        {category1.map(option =>
                                            <option key={option._id} value={option._id}>{option.Name}</option>
                                        )}

                                    </select>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger"
                                    onClick={() => addProduct()} data-dismiss="modal">ADD</button>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
            <div className="container-fluid">
                <div className="text-center center">
                    <marquee width="80%" direction="left" height="90px" >
                        <h2 style={{ color: "red" }}>Welcome   To   Product   Page</h2>
                    </marquee>

                </div>
                <div className="row">
                    <table className="table table-sm table-bordered table-hover table-striped">
                        <thead className="text-center">
                            <tr style={{ background: "#7FFFD4" }} >
                                <th style={{width:"50px"}} scope="col">No</th>
                                <th scope="col">name</th>
                                <th scope="col">price</th>
                                <th scope="col">quantity</th>
                                <th scope="col">createBy</th>
                                <th scope="col">detele category</th>
                                
                                            
                            </tr>
                        </thead>
                        <tbody>
                            {product.map(product =>

                                <tr key={product._id}>
                                    <th scope="row">{count += 1}</th>
                                    <td>{product.name}</td>
                                    <td className="text-center">{product.price}</td>
                                    <td className="text-center">{product.quantity}</td>
                                    <td className="text-center">{product.createBy}</td>
                                    <td> <button className="btn btn-danger text-center" 
                                    onClick={() => deleteProduct(product._id)} >delete</button></td>
                                   
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </>

    )
}

export default ProductPage
