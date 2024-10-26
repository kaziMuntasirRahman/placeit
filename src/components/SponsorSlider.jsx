import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
// import required modules

const SponsorSlider = () => {
  const images = [
    'images/sponsors/1.png',
    'images/sponsors/2.png',
    'images/sponsors/3.png',
    'images/sponsors/4.png',
    'images/sponsors/5.png',
    'images/sponsors/1.png',
    'images/sponsors/2.png',
    'images/sponsors/3.png',
    'images/sponsors/4.png',
    'images/sponsors/5.png',];

  return (
    <div className='h-[200px] mt-[85px] px-[370px] bg-[#f5f5f5] flex items-center justify-center'>
      <Swiper
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper !border-none"
      >
        {
          images.map((image, index) =>
            <SwiperSlide className='!border-none'>
              <img src={image} />
            </SwiperSlide>
          )}
      </Swiper>
    </div>
  );
}

export default SponsorSlider;