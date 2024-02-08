import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../styles/ui/slideShow.css";
import store from "../../redux/store";

function SlideShow({ initImg = "3", index, ...props }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {}, [thumbsSwiper, initImg]);

  return (
    <>
      <Swiper
        initialSlide={index}
        loop={true}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="product-image-slider"
      >
        {store.getState().imgWall.imgWall.map(({ id, imageUrl }) => (
          <SwiperSlide key={id}>
            <img src={imageUrl} alt="Slide Images" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        className="product-image-slider-thumbs"
      >
        {store.getState().imgWall.imgWall.map(({ id, imageUrl }) => (
          <SwiperSlide key={id}>
            <div className="product-image-slider-thumbs-wrapper">
              <img src={imageUrl} alt="Slide Images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SlideShow;
