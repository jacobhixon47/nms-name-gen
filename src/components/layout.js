/* @jsx jsx */

import React from 'react';
import Helmet from 'react-helmet';
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
    <Helmet
      title="Jacob Hixon — Web Developer"
      meta={[
        { name: 'description', content: 'System Name Generator No Mans Sky' },
        { name: 'keywords', content: 'No, Mans, Sky, System, Name, Generator' }
      ]}>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
    </Helmet>
    <Header />
    <Nav handleNavSelect={props.handleNavSelect}/>
    <div>
      {props.children}
    </div>
  </div>
);

export default Layout;
