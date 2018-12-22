/* @jsx jsx */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Form from './form';
import { StaticQuery, graphql } from 'gatsby';
import { css, jsx } from '@emotion/core';

const nameGenPanelStyle = css`

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
      <Form handleFormSubmit={props.handleFormSubmit} selectedCiv={props.selectedCiv} data={data}/>
    </div>
    )}
  />
);

export default NameGenPanel;
