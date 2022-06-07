import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banners/banner-1.jpg';
import banner2 from '../../../Images/banners/banner-2.jpg';
import banner3 from '../../../Images/banners/banner-3.jpg';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            style={{ height: '60vh' }}
            src={banner1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>
              The library is inhabited by spirits that come out of the pages at
              night.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            style={{ height: '60vh' }}
            src={banner2}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>
              There is no more lovely, friendly and charming relationship,
              communion or company, than a good marriage.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            style={{ height: '60vh' }}
            src={banner3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>
              Being deeply loved by someone gives you strength, while loving
              someone deeply gives you courage.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
