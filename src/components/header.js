/* @jsx jsx */

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { css, jsx } from '@emotion/core';

const headerStyle = css`
  width: 100vw;
  height: calc(100vh - 60px);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
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
        }}
      >
      NMS System Name Generator
      </Link>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
