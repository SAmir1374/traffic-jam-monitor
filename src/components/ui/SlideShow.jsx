import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../styles/ui/slideShow.css";
import img1 from "../images/20230604-093500.jpg";
import img2 from "../images/avator.png";
import img3 from "../images/defualtmonitoring.jpg";

const defaultImage = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img1 },
  { id: 5, src: img2 },
  { id: 6, src: img3 },
];

function SlideShow({ images = defaultImage, initImg = "3", ...props }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    console.log(thumbsSwiper);
  }, [thumbsSwiper]);

  return (
    <>
      <Swiper
        initialSlide={initImg}
        loop={true}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="product-image-slider"
      >
        {images.map(({ id, src }) => (
          <SwiperSlide key={id}>
            <img src={src} alt="Slide Images" />
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
        {images.map(({ id, src }) => (
          <SwiperSlide key={id}>
            <div className="product-image-slider-thumbs-wrapper">
              <img src={src} alt="Slide Images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SlideShow;
