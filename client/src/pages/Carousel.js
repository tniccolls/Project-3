import React, { Component } from "react";
import Slider from "react-slick";
import "./css/style.css";
import Navbar from "../components/Navbar";
import FriendCard from "../components/FriendCard";
import infoCards from "./JSON_files/infocards.json";
import display from "./JSON_files/display.json";
import Footer from "../components/Footer/Footer"
import Helmet from "react-helmet";

class Carousel extends Component {
  state = {
    display
  };

  clickPic = id => {
    if(id === 1){
      display.splice(0,13,display[0],infoCards[5],infoCards[6],infoCards[12]);
      this.setState({ display });
    }
    if(id===2){
      display.splice(0,12,display[1],infoCards[7],infoCards[8],infoCards[12]);
      this.setState({ display });
    }
    if(id===3){
      display.splice(0,12,display[2],infoCards[9],infoCards[10],infoCards[12]);
      this.setState({ display });
    }
    if(id===4){
      display.splice(0,12,display[3],infoCards[11],infoCards[12]);
      this.setState({ display });
    }
    if(id===5){
      display.splice(0,12,display[4],infoCards[11],infoCards[12]);
      this.setState({ display });
    }
    if(id===13){
      display.splice(0,12,infoCards[0],infoCards[1],infoCards[2], infoCards[3]);
      this.setState({ display });
    }
  }


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
      speed: 1000,
      slidesToShow: 3,
      autoplay: true,
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
          <div id="1" class="slide">
            <a href = "https://google.com"><img
              class="slide_image"
              src={require("../components/Assets/Images/dvshelter_4.09.jpg")} 
              alt = "Shelter"
            /></a>
          </div>
          <div id="slide2" class="slide">
            {/* <h3>2</h3> */}
            <img
              class="slide_image"
              src={require("../components/Assets/Images/lowIncome.jpg")} 
              alt="housing"
            />
          </div>
          {/* {<div id="slide3" class="slide">
            <img
              class="slide_image"
              src={require("../components/Assets/Images/transitionalHousing.png")}
              alt="transitional housing"
            />
          </div>} */}
          <div id="slide4" class="slide">
            <img
              class="slide_image"
              src={require("../components/Assets/Images/htshelter.jpg")}
              alt = "shelter2"
            />
          </div>
          <div id="slide5" class="slide">
            <img
              class="slide_image"
              src={require("../components/Assets/Images/legal_services.png")}
              alt="legal services"
            />
          </div>
          <div id="slide6" class="slide">
            <img
              class="slide_image"
              src={require("../components/Assets/Images/homelessShelter.jpg")}
              alt = "shelter3"
            />
          </div>
          {/* <div class="slide">
          <img
              class="slide_image"
              src={require("../components/Assets/Images/youthshelter.jpeg")}
            />
          </div> */}
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
          {this.state.display.map(friend => (
            <FriendCard
              clickPic={this.clickPic}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              info={friend.info}
            />
          ))}
        </div>
        <Footer />
      </div>

    );
  }
}

export default Carousel;
