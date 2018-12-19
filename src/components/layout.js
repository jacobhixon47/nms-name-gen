/* @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { css, jsx } from '@emotion/core';
import Header from './header';
import Nav from './nav';

const layoutStyle = css`
  margin: 0;
  body {
    margin: 0;
  }
`;


const Layout = (props) => (
  <div css={layoutStyle}>
    <Header />
    <Nav handleNavSelect={props.handleNavSelect}/>
    <div>
      {props.children}
    </div>
  </div>
);

export default Layout;
