import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import image from "../../assets/images/Image.png"

function Slider() {

    return (
        <>
        <Swiper
          
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide 
          className="mySwiper__slider">
            <img src={image} alt='...' />
            <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
            <p>1h ago · by Troy Corlson</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper__slider">
            <img src={image} alt='...' />
            <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
            <p>1h ago · by Troy Corlson</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper__slider">
            <img src={image} alt='...' />
            <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
            <p>1h ago · by Troy Corlson</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper__slider">
            <img src={image} alt='...' />
            <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
            <p>1h ago · by Troy Corlson</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper__slider">
            <img src={image} alt='...' />
            <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
            <p>1h ago · by Troy Corlson</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper__slider">
            <img src={image} alt='...' />
            <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
            <p>1h ago · by Troy Corlson</p>
          </SwiperSlide>
          <SwiperSlide className="mySwiper__slider">
            <img src={image} alt='...' />
            <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
            <p>1h ago · by Troy Corlson</p>
          </SwiperSlide>
        </Swiper>
      </>
  )
}

export default Slider