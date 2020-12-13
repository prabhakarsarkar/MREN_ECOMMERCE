import React, { useEffect } from 'react'
import BookCategory from './contianer/CATEGORY/Category'
import ProductHomePage from './contianer/PRODUCT/ProductHomePage'
import Home from './contianer/Home/Home'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ProductGetByCategoryId from './contianer/PRODUCT/ProductGetByCategoryId';
import { getCategoryAction } from './Redux/Action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getCategoryAction())
 }, [])

  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route exact path="/" exact component={ProductHomePage} />
          <Route exact path="/category" component={BookCategory} />
          <Route exact path="/product" component={ProductHomePage} />
          <Route exact path="/product/getByCategory" component={ProductGetByCategoryId}/>
          <Route path="**" >
            <Redirect to={{pathname:"/"}}/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;