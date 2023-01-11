import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class SliderImageSectwo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      speed: 2500,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <Slider {...settings}>
            <div className="relative">
               <div className="md:max-w-[450px] w-full">
                   <img className="p-2 w-full rounded-t-full" src="/img/image_50.png" />
               </div>
               <img src="/img/line2.svg" className="md:max-w-[455px] w-full absolute -top-[1px]" />
            </div>
            <div className="relative">
               <div className="md:max-w-[450px] w-full">
                   <img className="p-2 w-full rounded-t-full" src="/img/image_50.png" />
               </div>
               <img src="/img/line2.svg" className="md:max-w-[455px] w-full absolute -top-[1px]" />
            </div>
          
          
        </Slider>
      </React.Fragment>
    );
  }
}