import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import TheCarousel from './components/theCarousel/TheCarousel';
import Flags from './components/flags/Flags';
import { Grid, Row, Col } from 'react-bootstrap';
import TravelTable from './components/travelTable/TravelTable';
import { Table } from 'react-bootstrap';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <TheCarousel />
        <Flags />
        <h3 id="title">Some information about the places I would like to visit</h3>
        <TravelTable />
        <Footer />
      </div>
    );
  }
}

export default App;
