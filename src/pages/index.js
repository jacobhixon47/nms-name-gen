import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import NameGenPanel from '../components/name-gen-panel';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      civ: 'New Aquarius'
    }

    this.handleNavSelect = this.handleNavSelect.bind(this);
  }

  handleNavSelect(civ) {
    this.setState({civ: civ});
  }

  render() {
    const regionList = [];

    return (
      <Layout handleNavSelect={this.handleNavSelect}>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <NameGenPanel regionList={regionList[0]}/>
      </Layout>
    );
  }
}

export default IndexPage;
