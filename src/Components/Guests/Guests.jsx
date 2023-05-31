import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import "./styles.css";
import './Guests.scss';
import '../../App.css';
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export const Guests = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const guests = [
    {
      image: '/Kermen.jpg',
      caption: 'Кермен',
    },
    {
      image: '/Andrew2.jpg',
      caption: 'Андрей',
    },
    {
      image: '/Tsagana3.jpg',
      caption: 'Цагана',
    },
    {
      image: '/Anastasia.jpg',
      caption: 'Анастасия',
    },
    {
      image: '/Irokez3.jpg',
      caption: 'Евгений',
    },
    {
      image: '/Viktoria.jpg',
      caption: 'Жена Евгения',
    },
    {
      image: '/Nastya.jpg',
      caption: 'Настя',
    },
    {
      image: '/Misha2.jpg',
      caption: 'Михаил',
    },
  ];

  return (
    <div className="Guests">

      <h2 className="title Guests__title">Участники</h2>

      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        speed={1000}
        autoplay={true}
      >
        {guests.map(i => (
          <SwiperSlide>
            <div className="Guests__item">

              <img alt={i.caption} src={i.image} />
              <p>{i.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={guests.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {guests.map(i => (
          <SwiperSlide>
            <img alt={i.caption} src={i.image} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
