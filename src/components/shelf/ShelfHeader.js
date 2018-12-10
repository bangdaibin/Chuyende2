import React from 'react';
import PropTypes from 'prop-types';

import Clearfix from '../Clearfix';
import Sort from './Sort';

const ShelfHeader = (props) => {

  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.productsLength} Product(s) found.</span>
      </small>
      <Sort />
      <Clearfix />
    </div>
  );
}

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired,
}

export default ShelfHeader;
