import React, { Component } from 'react';
import Layout from '../components/layout';
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
    return (
      <Layout handleNavSelect={this.handleNavSelect}>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <NameGenPanel selectedCiv={this.state.civ}/>
      </Layout>
    );
  }
}

export default IndexPage;
