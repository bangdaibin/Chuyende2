import React, { Component } from 'react';

import { connect } from "react-redux";

import { updateFilters } from '../../actions/filterActions';

import Checkbox from '../Checkbox';


const availableSizes = [
  'XS',
  'S',
  'M',
  'ML',
  'L',
  'XL',
  'XXL',
];


class Filter extends Component {

  componentWillMount() {
    this.selectedCheckboxe = new Set();
  }

  toggleCheckbox = (label) => {
    //deselect
    if (this.selectedCheckboxe.has(label)) {
      this.selectedCheckboxe.delete(label);
  } else {
     //select
      this.selectedCheckboxe.add(label);
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxe));
 }

  // foreach this shit
  createCheckboxes = () => (
    availableSizes.map(this.createCheckbox)
  )

  //sending sigle object label from availableSizes
  createCheckbox = (label) => (
   <Checkbox
       classes="filters-available-size"
       label={label}
       handleCheckboxChange={this.toggleCheckbox}
       key={label}
   />
  )
  render() {
    return (
      <div>
        <h4 className="title">Sizes:</h4>
        {this.createCheckboxes()}

      </div>
    );
  }
}


const mapStateToProps = state => ({
  filters: state.filters.items,
})

export default connect(mapStateToProps, { updateFilters })(Filter);
