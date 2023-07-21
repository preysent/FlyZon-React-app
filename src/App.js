import React from 'react'
import Head from './components/header/Head';
import Main from './components/body/Main';
import Footer from './components/footer/Footer';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp';

import './App.css'


function App() {
  return (
    <>
      <Router>

        <Switch>

          <Route exact path="/login">
            <Login />
          </Route>


          <Route exact path="/signUp">
            <SignUp />
          </Route>


          <Route path='/'>
            <div className='flex flex-col min-h-screen'>
              <Head />
              <Main />
              <Footer />
            </div>
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
