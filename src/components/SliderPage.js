import React from "react";
import Slider from "react-slick";
import S1 from '../img/pngn.jpg';
import S2 from '../img/gerryfish.jpg';
import S3 from '../img/jinbe.jpg';
import S4 from '../img/fish.jpg';
export default function SliderPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  let slides = [
      {name:'first',    url:S1},
      {name:'second',   url:S2},
      {name:'third',    url:S3},
      {name:'forth',    url:S4}
    ];
  return (
      <div className="slider-wrapper">
          <h2>Photos</h2>
        <Slider {...settings}>
            {slides.map(slide => {
            return [
                <div className="slider">
                    <img src={slide.url} alt={slide.name}/>
                </div>
            ];
            })}
        </Slider>
    </div>
  );
}