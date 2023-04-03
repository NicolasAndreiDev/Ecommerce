import style from './Carrousel.module.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Thumbs} from 'swiper';
import { useState } from 'react';
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import 'swiper/css';

const Carrousel = ({produto}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return(
        <div className={style.alinhamento}>
            <Swiper className={style.swiper}
            spaceBetween={10}
            allowTouchMove={false}
            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            modules={[ FreeMode, Thumbs]}
            >
                <SwiperSlide>
                    <img className={style.slide2} src={produto.img} alt={produto.descricao} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={style.slide2} src={produto.img2} alt={produto.descricao} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={style.slide2} src={produto.img3} alt={produto.descricao} />
                </SwiperSlide>
                {produto.img4 === undefined ? '' :
                <SwiperSlide>
                    <img className={style.slide2} src={produto.img4} alt={produto.descricao} />
                </SwiperSlide> }
            </Swiper>
            <Swiper
                className={style.swiperBottom}
                direction={'horizontal'}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                >
                    <SwiperSlide>
                        <img className={style.slide1} src={produto.img} alt={produto.descricao} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={style.slide1} src={produto.img2} alt={produto.descricao} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={style.slide1} src={produto.img3} alt={produto.descricao} />
                    </SwiperSlide>
                    {produto.img4 === undefined ? '' :
                    <SwiperSlide>
                        <img className={style.slide1} src={produto.img4} alt={produto.descricao} />
                    </SwiperSlide> }
                </Swiper>
        </div>
    )
}

export default Carrousel