import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import TravelTableRow from './TravelTableRow';
import './TravelTable.css';

class TravelTable extends Component {
  render() {
    return (
      <div id='tableStyles'>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Capital</th>
            <th>Official Language</th>
            <th>Population (aprox.)</th>
            <th>National Bird</th>
          </tr>
        </thead>
        <tbody>
          <TravelTableRow destination='Spain' capital='Madrid' officialLanguage='Spanish' population='46.77 million' nationalBird='Eagle' />
          <TravelTableRow destination='Italy' capital='Rome' officialLanguage='Italian' population='59.83 million' nationalBird='Bluebirds' />
          <TravelTableRow destination='Aruba' capital='Oranjestad' officialLanguage='Dutch' population='102,911' nationalBird='Aruban Burrowing' Owl />
          <TravelTableRow destination='Chile' capital='Santiago' officialLanguage='Spanish' population='17.62 million' nationalBird='Andean condor' />
      </tbody>
    </Table>
  </div>
    );
  }
}

export default TravelTable;
