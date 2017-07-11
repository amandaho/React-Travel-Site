import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FlagsDisplay from './FlagsDisplay';
import './Flags.css';

class Flags extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <FlagsDisplay country="Spain" photo="/assets/images/spain_flag.svg" website="http://www.spain.info/en_US/" description="Spain Tourism Site" />
          <FlagsDisplay country="Chile" photo="/assets/images/chile_flag.svg" website="http://chile.travel/en/" description="Chile Tourism Site" />
          <FlagsDisplay country="Italy" photo="/assets/images/italy_flag.svg" website="http://www.italia.it/en/home.html" description="Italy Tourism Site" />
          <FlagsDisplay country="Aruba" photo="/assets/images/aruba_flag.svg" website="http://www.arubatourism.com/" description="Aruba Tourism Site" />
        </Row>
      </Grid>
    );
  }
}

export default Flags;
