import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import ShirtPage from '../components/ShirtPage';
import PantPage from '../components/PantPage';
import MainPage from '../components/MainPage';

/* trang chu : MainShelf
   quan : PaintShelf
   ao : ShirtShelf
   */

import store from '../store';

class App extends Component {
  render() {
    return (
      <Router>
      <Provider store={store}>
      <div>x`

      <div id="top-bar" className="container">
        <div className="row">

          <div className="span4">
            <form method="POST" className="search_form">
              <input type="text" className="input-block-level search-query" placeholder="eg. T-sirt" />
            </form>
          </div>

          <div className="span8">
            <div className="account pull-right">
              <ul className="user-menu">
                <li><a href="#">My Account</a></li>
                <li><a href="cart.html">Your Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="register.html">Login</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
        <div id="wrapper" className="container">
      <section className="navbar main-menu">
        <div className="navbar-inner main-menu">
          <a href="index.html" className="logo pull-left"><img src="./template/themes/images/logo.png" className="site_logo" /></a>
          <nav id="menu" className="pull-right">
            <ul>

              <li><a>
              <Link to="/">main </Link>
              </a></li>
              <li><a>
              <Link to="/pant">pant </Link>
              </a></li>
              <li><a><Link to="/shirt">shirt </Link>
              </a></li>
            </ul>
          </nav>
        </div>
      </section>
       </div>
       <Route exact path="/"component={MainPage} />
       <Route path="/pant" component={PantPage} />
       <Route path="/shirt" component={ShirtPage} />
        </div>
      </Provider>
      </Router>
    )
  }
}

export default App;
