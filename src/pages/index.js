import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NameGenPanel from '../components/name-gen-panel';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      civ: 'New Aquarius',
      newCivName: ''
    }
    this.handleNavSelect = this.handleNavSelect.bind(this);
    this.displaySystemName = this.displaySystemName.bind(this);
  }

  displaySystemName(prefix, region, lastFour, name) {
    let formattedLastFour = lastFour.replace(/^0+/, '').toUpperCase();
    let formattedName = name.toLowerCase()
                    .split(' ')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    this.setState({newCivName: `[${prefix}${region}-${formattedLastFour}] ${formattedName}`});
    console.log(`[${prefix}${region}-${formattedLastFour}] ${formattedName}`);
  }

  handleNavSelect(civ) {
    this.setState({civ: civ});
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <Layout handleNavSelect={this.handleNavSelect}>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <NameGenPanel displaySystemName={this.displaySystemName} selectedCiv={this.state.civ} newCivName={this.state.newCivName}/>
      </Layout>
    );
  }
}

export default IndexPage;
