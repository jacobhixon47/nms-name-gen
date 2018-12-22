/* @jsx jsx */

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import img from '../../data/images/header-bg.jpg';

import { css, jsx } from '@emotion/core';

const headerStyle = css`
  width: 100vw;
  height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-position: bottom;
  background-size: cover;
  color: #ddd;
`;

const Header = (props) => (
  <div css={headerStyle}>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          backgroundColor: 'rgba(50, 50, 50, 0.5)',
          padding: '10px'

        }}
      >
      NMS System Name Generator
      </Link>
    </h1>
  </div>
)

export default Header
