import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class SliderImage extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.12,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
            <div className="max-w-[532px]">
                <img className="w-full h-auto" src="/img/content/Rectangle_54.png" alt="pic" />
             </div>
             <div className="max-w-[532px]">
                <img className="w-full h-auto" src="/img/content/Rectangle_54.png" alt="pic" />
             </div>
             <div className="max-w-[532px]">
                <img className="w-full h-auto" src="/img/content/Rectangle_54.png" alt="pic" />
             </div>

        </Slider>
      </div>
    );
  }
}