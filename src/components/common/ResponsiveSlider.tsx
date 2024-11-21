import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productList } from '../../data/productList';

const ResponsiveSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: true,
    prevArrow: <img src='/public/icons/arrow_left.svg' />,
    nextArrow: <img src='/public/icons/arrow.svg' />,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  const handleSlideClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-2xl font-bold my-8'>
        Our Latest Colour Collection 2021
      </h2>
      <Slider ref={sliderRef} {...settings} >
        {productList.map((product, index) => (
          <div
            key={index}
            className={`px-2 transform transition-transform duration-300 ease-in-out ${
              currentSlide === index ? 'scale-110 z-10' : 'scale-90 '
            }`}
            onClick={() => handleSlideClick(index)}
          >
            <div
              className={`p-4 cursor-pointer ${currentSlide === index ? 'shadow-[0px_21px_88px_0px_#7E767633]' : "rounded-lg border-[1px_solid_#7D75754D]"}`}
            >
              <img
                src={product.img}
                alt={product.title}
                className='block mx-auto max-w-full rounded-lg '
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;