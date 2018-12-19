/* @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { css, jsx } from '@emotion/core';

const navStyle = css`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #222;
  color: #ddd;
`;

const navItem = css`
  padding: 5px;
  width: auto;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
  }
  transition: all 1s;
  &:hover {
    background-color: #ddd;
    color: #222;
    transition: all 1s;
    cursor: pointer;
  }
  flex-grow: 4;
`;

const Nav = props => (
  <div id='nav' css={navStyle}>
    <div css={navItem} onClick={() => props.handleNavSelect('New Aquarius')}>
      <p>New Aquarius</p>
    </div>
    <div css={navItem} onClick={() => props.handleNavSelect('Galactic Hub')}>
      <p>Galactic Hub</p>
    </div>
  </div>
);

export default Nav;
