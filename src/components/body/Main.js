import React from 'react'
import Home from './Home'
import ProductPage from './ProductPage';

import {
  Switch,
  Route,
} from "react-router-dom";


const Main = () => {


  return (
    <>
      <Switch>
        <Route  path={`/product/:id`}>
          <ProductPage />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>


    </>
  )
}

export default Main
