import React, { useEffect } from 'react'
import Login from './container/LOGIN/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './container/SIGNUP/SignupPage';
import Category from './container/COTEGORY/CategoryPage';
import Product from './container/PRODUCT/ProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginUser, getCategoryAction, getProductAction } from './Redux/Actions';
import PrivateRoute from './Compoents/HOC/PrivateRoute';
import AdminDetails from './container/adminDeshborad/AdminDetails';
import Orders from './container/Orders/Orders';
function App() {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth)
  
    useEffect(() => {
    
      if(!auth.authenticate){
        console.log("!auth.authenticate");
      dispatch(checkLoginUser())
    }
    dispatch(getCategoryAction())
    dispatch(getProductAction())
    }, [])
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/orders" component={Orders}/> 
          <PrivateRoute path="/admin" component={AdminDetails}/>
          <PrivateRoute path="/" component={AdminDetails}/>  
          <PrivateRoute path="/category" component={Category} />
          <PrivateRoute path="/product" component={Product} />
        </Switch>
      </Router>

    </div>
  );
}

export default App; 
