import React, { Component } from 'react';

import ShirtShelf from './shelf/shirtShelf';
import ShoppingCart from './floatCart/FloatCart';

class ShirtPage extends Component {
  render() {
    return (
        <div>
          <ShirtShelf />
          <ShoppingCart />
        </div>
    )
  }
}

export default ShirtPage;
