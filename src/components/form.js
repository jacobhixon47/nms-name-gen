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
    //
    const regions = this.props
                        .data
                        .allDataJson
                        .edges[0]
                        .node
                        .civs
                        .filter(civ => civ.name === this.props.selectedCiv)[0]
                        .regions;
    // map regions
    const regionList = regions.map((region, index) =>
      <option key={index}>{region.number}. {region.name}</option>
    );
    console.log("CIVS: " + this.props.data.allDataJson.edges[0].node.civs.filter(civ => civ.name === this.props.selectedCiv)[0].name);
    return (
      <form onSubmit={() => {this.props.handleFormSubmit(this.state.region, this.state.lastFour, this.state.name)}} css={formStyle}>
        <label>
          <select>
          {regionList}
          </select>
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
