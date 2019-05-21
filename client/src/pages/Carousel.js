import React, { Component } from "react";
import Slider from "react-slick";
import "./css/style.css";
import Navbar from "../components/Navbar";
import FriendCard from "../components/FriendCard";
import friends from "../friends.json";
import Helmet from "react-helmet";

class Carousel extends Component {
  state = {
    friends
  };

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
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3500,
      cssEase: "linear"
    };
    return (
      <div id="c-background">
        <Navbar />
        {/* <h2 class="fas fa-home"> Welcome to our website</h2> */}
        <Slider ref={c => (this.slider = c)} {...settings}>
          <Helmet>
            <style>{"body { background-color: #E0FFFF }"}</style>
          </Helmet>
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
          <button className="slide-button" onClick={this.previous}>
            <i class="fas fa-angle-double-left left-arrow" />
            Previous
          </button>
          <button className="slide-button" onClick={this.next}>
            Next
            <i class="fas fa-angle-double-right right-arrow" />
          </button>
        </div>
        <div id="card-background">
          {this.state.friends.map(friend => (
            <FriendCard
              clickPic={this.clickPic}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
