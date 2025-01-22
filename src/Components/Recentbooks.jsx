// import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json'
import Cards from './bookcard/BookCards';

function Recentbooks() {
  const filterData = list.filter((data)=>data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div>
     <h1 className='font-semibold text-xl pb-2'>Recently Added Books</h1>
      <p>Our mission is to foster a love for reading by creating a warm and welcoming space for book lovers.!</p>
     </div>
   
    <div>
    <Slider {...settings}>
    {/* for frontend list.json */}
    {filterData.map((items) => (
              <Cards items={items} key={items.id} />
            ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Recentbooks
