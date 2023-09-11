import React from 'react'
import Slider from "react-slick";

const SliderComponent = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className=' mx-auto w-1280'>
        <Slider {...settings}>
          {
            props.arrImage.map((image, index) => (
              <div key={index}>
                <img src={image} alt='slider' className='w-full h-274' />
              </div>
            ))
          }
        </Slider>
      </section>
    </>
  )
}

export default SliderComponent
