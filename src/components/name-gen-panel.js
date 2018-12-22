/* @jsx jsx */

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Form from './form';
import { StaticQuery, graphql } from 'gatsby';
import { css, jsx } from '@emotion/core';

const nameGenPanelStyle = css`
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 60px);
`;

const showNameStyle = css`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameGenPanel = (props) => (
  <StaticQuery
    query={graphql`
    query CivQuery {
      allDataJson {
        edges {
          node {
            civs {
              name
              prefix
              regions {
                name
                number
              }
            }
          }
        }
      }
    }
  `}
  render={data => (
    <div id='name-gen-panel' css={nameGenPanelStyle}>
      <Form displaySystemName={props.displaySystemName} selectedCiv={props.selectedCiv} data={data}/>
      <div css={showNameStyle}>
        <h1>{props.newCivName}</h1>
      </div>
    </div>
    )}
  />
);

export default NameGenPanel;
