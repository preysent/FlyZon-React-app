import React from 'react'
import Home from './Home'
import ProductPage from './ProductPage';

import {
  Switch,
  Route,
} from "react-router-dom";
import Cart from './cart/Cart';


const Main = () => {


  return (
    <div className='flex-grow'>
      <Switch>
        
        <Route exact path={`/product/:id`}>
          <ProductPage />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/">          
          <Home />
        </Route>

      </Switch>


    </div>
  )
}

export default Main
