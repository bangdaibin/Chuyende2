import React, { Component } from 'react';

import PantShelf from './shelf/paintShelf';
import ShoppingCart from './floatCart/FloatCart';

class PantPage extends Component {
  render() {
    return (
        <div>
          <PantShelf />
          <ShoppingCart />
        </div>
    )
  }
}

export default PantPage;
