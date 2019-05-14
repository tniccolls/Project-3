import React, { Component } from "react";
import Slider from "react-slick";
// import './css/_slick.scss';
// import './css/_slickTheme.scss';
import './css/style.css';

class Carousel extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div class = "slide">
            <h3>Let's try something bigger</h3>
          </div>
          <div class = "slide">
            <h3>2</h3>
          </div>
          <div class = "slide">
            <h3>3</h3>
          </div>
          <div class = "slide">
            <h3>4</h3>
          </div>
          <div class = "slide">
            <h3>5</h3>
          </div>
          <div class = "slide">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;