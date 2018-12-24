/* @jsx jsx */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { css, jsx } from '@emotion/core';

const navStyle = css`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
  color: #ddd;
`;

const navItem = css`
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  flex-grow: 4;
  p {
    margin: 0;
  }
  &:hover {
    background-color: #ddd;
    color: #222;
    transition: all 1s;
    cursor: pointer;
  }
`;

const navItems = (data, props) => {
  let civs = data.allDataJson.edges[0].node.civs;
  return civs.map((civ) => (
    <div css={navItem} onClick={() => props.handleNavSelect(civ.name)}>
      <p>{civ.name}</p>
    </div>
  ));
}

const Nav = (props) => (
  <StaticQuery
    query={graphql`
    query {
      allDataJson {
        edges {
          node {
            civs {
              name
            }
          }
        }
      }
    }
  `}
  render={data => (
    <div id='nav' css={navStyle}>
      {navItems(data, props)}
    </div>
  )}/>
);


export default Nav;
