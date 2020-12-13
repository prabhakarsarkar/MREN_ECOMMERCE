import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addOrderAction } from '../Redux/Action/OrderAction';
import "./modal.css"


const Modal = (props) => {
   const dispatch = useDispatch();
   // console.log(props.productId,"props...........................");
   const [Name, setName] = useState('')
   const [quantity, setQuantity] = useState('')
   const [dist, setDist] = useState('')
   const [address, setAddress] = useState('')
   const [mobile, setMobile] = useState('')
   const [pincode, setPincode] = useState('')
   const [phoneProduct, setPhoneProduct] = useState(props.productId)

   const addOrder = () => {
      const data = {
         Name,
         quantity,
         dist,
         address,
         mobile,
         pincode,
         phoneProduct
      }

      dispatch(addOrderAction(data))

   }

   return (
      <div>
         
         <button className="btn btn-primary my-5 order-btn text-center" data-toggle="modal" data-target="#ModalId">
            buy
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
                        <label>quantity</label>
                        <input
                           type="text"
                           value={quantity}
                           name=""
                           className="form-control"
                           placeholder="quantity"
                           onChange={(e) => setQuantity(e.target.value)}
                        />  <br></br>
                        <label>dist</label>
                        <input
                           type="text"
                           value={dist}

                           className="form-control"
                           placeholder="dist"
                           onChange={(e) => setDist(e.target.value)}
                        />  <br></br>
                        <label>address</label>
                        <input
                           type="text"
                           value={address}
                           className="form-control"
                           placeholder="address"
                           onChange={(e) => setAddress(e.target.value)}
                        />  <br></br>
                        <label>mobile</label>
                        <input
                           type="text"
                           value={mobile}

                           className="form-control"
                           placeholder="mobile"
                           onChange={(e) => setMobile(e.target.value)}
                        />  <br></br>
                        <label>pincode</label>
                        <input
                           type="text"
                           value={pincode}
                           className="form-control"
                           placeholder="pincode"
                           onChange={(e) => setPincode(e.target.value)}
                           name=""
                        />  <br></br>

                     </form>

                  </div>
                  <div className="modal-footer">
                     <button className="btn btn-danger"
                        data-dismiss="modal"
                        onClick={() => addOrder()}
                     >ADD</button>

                  </div>

               </div>

            </div>

         </div>
      </div>
   )
}

export default Modal
