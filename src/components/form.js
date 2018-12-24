/* @jsx jsx */
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { css, jsx } from '@emotion/core';

const formStyle = css`
  width: 100%;
  height: 50%;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #777;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const inputContainerStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const inputSectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
  h2, p {
    margin-bottom: 2px;
  }
  p {
    font-size: 0.8em;
  }
  input {
    padding: 5px;
    border-radius: 10px;
    border: none;
    width: 75%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  select {
    width: 75%;
    padding: 3px;
    margin: 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background: #f8f8f8;
    color: #888;
    border: none;
    outline: none;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    padding: 5px;
    padding-right: 50px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const submitButton = css`
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #111;
  color: #ddd;
  transition: all .5s;
  @media (min-width: 1000px) {
    &:hover {
      border: 1px solid #111;
      background-color: #ddd;
      color: #111;
      cursor: pointer;
      transition: all .5s;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: 1,
      lastFour: '',
      name: ''
    }
    this.getRegionList = this.getRegionList.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleLastFourChange = this.handleLastFourChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleRegionChange(event) {
    this.setState({region: event.target.value});
    console.log("------> REGION NUMBER CHANGE: " + event.target.value);
  }

  handleLastFourChange(event) {
    this.setState({lastFour: event.target.value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleFormSubmit() {
    const prefix = this.props.data
                              .allDataJson
                              .edges[0]
                              .node
                              .civs
                              .filter(civ => civ.name === this.props.selectedCiv)[0]
                              .prefix;
    let region = this.state.region;
    let lastFour = this.state.lastFour;
    let name = this.state.name;
    this.props.displaySystemName(prefix, region, lastFour, name);
  }
  getRegionList() {
    // get regions of selected civ from JSON graphql data.
    const regions = this.props.data
                              .allDataJson
                              .edges[0]
                              .node
                              .civs
                              .filter(civ => civ.name === this.props.selectedCiv)[0]
                              .regions;
    return regions;
  }

  render() {

    // // map regions to <option> elements
    const regionList = this.getRegionList().map((region) =>
      <option key={region.number} value={region.number}>{region.name}</option>
    );

    return (
      <div css={formStyle}>
        <div css={inputContainerStyle}>
          <div css={inputSectionStyle}>
            <h2>Region</h2>
            <p><i>Visible in the Galactic Map</i></p>
            <select value={this.state.region} onChange={this.handleRegionChange}>
              {regionList}
            </select>
          </div>
          <div css={inputSectionStyle}>
            <h2>Last four (coords)</h2>
            <p><i>Example: 0430:0078:0D57:</i><strong>01DA</strong></p>
            <input type='text' maxlength='4' placeholder='01DA' value={this.state.lastFour} onChange={this.handleLastFourChange}></input>
          </div>
          <div css={inputSectionStyle}>
            <h2>Name</h2>
            <p><i>Anything you want!</i></p>
            <input type='text' placeholder="Quetzalcoatl's Sun" value={this.state.name} onChange={this.handleNameChange}></input>
          </div>
        </div>
        <button onClick={this.handleFormSubmit} css={submitButton}>Submit!</button>
      </div>
    );
  }
}

export default Form;
