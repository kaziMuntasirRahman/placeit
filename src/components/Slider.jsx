// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = ({ images }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) =>
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

export default Slider;