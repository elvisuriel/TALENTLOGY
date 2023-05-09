import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="card">
            <img src="/public/Images/foto1.jpg" alt="" className="w-100"/>
            <div className="card-body">
                <h3>Slick</h3>
                <p>TALENT-LOGY</p>
            </div>  
          </div>
          <div className="card">
            <img src="/public/Images/foto2.jpg" alt="" className="w-100"/>
            <div className="card-body">
                <h3>Slick</h3>
                <p>TALENT-LOGY</p>
            </div>  
          </div>
          <div className="card">
            <img src="/public/Images/foto3.jpg" alt="" className="w-100"/>
            <div className="card-body">
                <h3>Slick</h3>
                <p>TALENT-LOGY</p>
            </div>  
          </div>
          <div className="card">
            <img src="/public/Images/foto1.jpg" alt="" className="w-100"/>
            <div className="card-body">
                <h3>Slick</h3>
                <p>TALENT-LOGY</p>
            </div>  
          </div>
          <div className="card">
            <img src="/public/Images/foto 4.jpg" alt="" className="w-100"/>
            <div className="card-body">
                <h3>Slick</h3>
                <p>TALENT-LOGY</p>
            </div>  
          </div>
        </Slider>
      </div>
    );
  }
}
