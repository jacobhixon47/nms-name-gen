/* @jsx jsx */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Form from './form';
import { css, jsx } from '@emotion/core';

const nameGenPanelStyle = css`

`;

class NameGenPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      civ: ''
    }
  }

  handleFormSubmit(region, lastFour, name) {

  }

  render() {
    return (
      <div id='name-gen-panel' css={nameGenPanelStyle}>
        <Form handleFormSubmit={this.handleFormSubmit} regionList={this.props.regionList}/>
      </div>
    );
  }
}

export default NameGenPanel;
