import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './TheCarousel.css';

class TheCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img id="carouselpictures" src="/assets/images/ChugachMountains.jpg"/>
          <Carousel.Caption>
            <h1>Welcome to my Travel Site</h1>
            <h3>This site is about places I would like to travel</h3>
            <h3>Here are some places I would like to visit</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img id="carouselpictures" src="/assets/images/pexels-photo-196464.jpeg"/>
          <Carousel.Caption>
            <h1>Welcome to my Travel Site</h1>
            <h3>This site is about places I would like to travel</h3>
            <h3>Here are some places I would like to visit</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img id="carouselpictures" src="/assets/images/travel-agents.jpg"/>
          <Carousel.Caption>
            <h1>Welcome to my Travel Site</h1>
            <h3>This site is about places I would like to travel</h3>
            <h3>Here are some places I would like to visit</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img id="carouselpictures" src="/assets/images/travel.jpg"/>
          <Carousel.Caption>
            <h1>Welcome to my Travel Site</h1>
            <h3>This site is about places I would like to travel</h3>
            <h3>Here are some places I would like to visit</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default TheCarousel;
