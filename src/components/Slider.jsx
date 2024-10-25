// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

const Slider = ({ images }) => {
  return (
    <>
      <Swiper
        cssMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
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