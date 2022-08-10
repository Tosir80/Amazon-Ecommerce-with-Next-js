import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Hero = () => {
    var settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
        
      };
  return (
    <div className="z-[-3] mt-5 ">
      <Slider {...settings}>
        <div className="">
          <Image
            width={800}
            height={300}
            layout="responsive" objectFit="cover"
            src="/Images/slide1.jpg"
            alt=""
          />
        </div>
        <div className="top-5">
          <Image
             width={800}
            height={300}
            layout="responsive" objectFit="cover"
            src="/Images/slide2.jpg"
            alt=""
          />
        </div>
        <div className="">
          <Image
             width={800}
            height={300}
            layout="responsive" objectFit="cover"
            src="/Images/slide3.jpg"
            alt=""
          />
        </div>
        <div className="top-5">
          <Image
             width={800}
            height={300}
            layout="responsive" objectFit="cover"
            src="/Images/slide4.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
