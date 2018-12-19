/* @jsx jsx */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core';

const formStyle = css`

`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: '',
      lastFour: '',
      name: ''
    }
  }

  render() {
    // console.log(regionList);
    // const regionList = this.props.regionList.map((region, index) =>
    //   <option key={index}>{region.name}</option>
    // );
    return (
      <form onSubmit={() => {this.props.handleFormSubmit(this.state.region, this.state.lastFour, this.state.name)}} css={formStyle}>
        <label>
          Region
          <select>{}</select>
        </label>
        <label>
          Last four characters of coordinates
          <input type='text' max-length='4'></input>
        </label>
      </form>
    );
  }
}

export default Form;
