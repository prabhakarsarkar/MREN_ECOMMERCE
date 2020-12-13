import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../Compoents/Headers/AdminNavbar'
import { addCategoryAction, deleteCategory } from '../../Redux/Actions'
import "./category.css"
const Category = () => {
    let count = 0;
    const dispatch = useDispatch()
    const category = useSelector(state => state.category.categories)
    console.log(category);

    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('')
    const [imges, setImges] = useState('')

  

    const addCategory = () => {
        const data = {
            Name,
            Description,
            imges
        }
        dispatch(addCategoryAction(data))
    }

    const deleteCategories =(id)=>{
        dispatch(deleteCategory(id))
    }

    return (
        <>
            <AdminNavbar />
            
           
            

            <div className="container">
            <div className="jumbotron" style={{paddingTop:"10px", width:"100%",background:"white"}}>
            </div>
                <br></br>
                <button className="btn btn-primary category-button" data-toggle="modal" data-target="#ModalId">
                    Add Category
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
                                        value={Name}
                                        className="form-control"
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />  <br></br>
                                    <label>Description</label>
                                    <input
                                        type="text"
                                        value={Description}
                                        className="form-control"
                                        placeholder="Description"
                                        onChange={(e) => setDescription(e.target.value)}
                                    /><br></br>
                                    <label> imges</label>
                                    <input
                                        type="text"
                                        value={imges}
                                        className="form-control"
                                        placeholder=" imges"
                                        onChange={(e) => setImges(e.target.value)}
                                    />

                                </form>

                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" onClick={() => addCategory()} data-dismiss="modal">ADD</button>

                            </div>

                        </div>

                    </div>

                </div>

                </div>
           
            <div className="container-fluid">
                <div className="text-center center">
                    <h3>welcome to book category </h3>
                </div>
                <div className="row">
                <table className="table table-bordered">
                    <thead className="text-center"> 
                        <tr className="bg-success" >
                            <th  scope="col">No</th>
                            <th  scope="col">category name</th>
                            <th  scope="col">craeteBy</th>
                            <th  style={{width:"10%"}}scope="col"  >detele category</th>
                            

                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {category.map(cate =>
                            <tr key={cate._id}>
                                <th scope="row">{count+=1}</th>
                                <td>{cate.Name}</td>
                                <td>{cate.createBy}</td>
                               <td> <button className="btn btn-danger" style={{marginLeft:"0px" }}
                               onClick={()=>deleteCategories(cate._id)}>delete</button></td>
         
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
            </div>
           


        </>

    )
}

export default Category

