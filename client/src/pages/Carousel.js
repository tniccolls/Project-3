import React, { Component } from "react";
import Slider from "react-slick";
// import './css/_slick.scss';
// import './css/_slickTheme.scss';
import "./css/style.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2 class="fas fa-home"> Welcome to our website</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div class="slide">
            <h3>Let's try something bigger</h3>
          </div>
          <div class="slide">
            {/* <h3>2</h3> */}
            <img
              class="slide_image"
              src="https://texastinyhomes.com/wp-content/uploads/2013/03/Rendering-3-3.jpg"
              alt="house"
            />
          </div>
          <div class="slide">
            {/* <h3>3</h3> */}
            <img
              class="slide_image"
              src="https://texastinyhomes.com/wp-content/uploads/2013/03/Rendering-3-3.jpg"
              alt="house"
            />
          </div>
          <div class="slide">
            <h3>4</h3>
          </div>
          <div class="slide">
            <h3>5</h3>
          </div>
          <div class="slide">
            <h3>6</h3>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            <i class="fas fa-angle-double-left left-arrow" />
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
            <i class="fas fa-angle-double-right right-arrow" />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
