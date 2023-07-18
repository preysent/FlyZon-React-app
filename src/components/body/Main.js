import React from 'react'
import Home from './Home'
import ProductPage from './ProductPage';

import {
  Switch,
  Route,
} from "react-router-dom";
import Cart from './Cart';


const Main = () => {


  return (
    <>
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


    </>
  )
}

export default Main
