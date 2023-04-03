import style from './Carousel.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { fotosHome } from '../../../bdFotos';
import "swiper/css/navigation";
import 'swiper/css';

const Carousel = () => {
  return (
    <>
      <Swiper
      className={style.carousel}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
        loop={true}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        modules={[ Navigation ]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
              slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {fotosHome.map(foto => {
            return(
                <div key={foto.id}>
                  <SwiperSlide className={style.slide} key={foto.id} style={{backgroundImage: `url(${foto.foto})`, backgroundPosition: 'center top', backgroundSize: 'cover'}}></SwiperSlide>
                </div>
            )
        })}
      </Swiper>
    </>
  );
}


export default Carousel