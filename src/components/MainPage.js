import React, { Component } from 'react';

import Main from './main';
import ShoppingCart from './floatCart/FloatCart';

class MainPage extends Component {
  render() {
    return (
        <div>
          <Main />
          <ShoppingCart />
        </div>
    )
  }
}

export default MainPage;
