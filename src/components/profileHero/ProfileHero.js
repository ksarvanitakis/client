// import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import './ProfileHero.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Thumbs])

const ProfileHero = ({ chef }) => {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const slides = [];
    chef.heroImages.forEach((img, index) => slides.push(
        <SwiperSlide key={`slide-${index}`} className='swiper-wrapper'>
            <img
                src={img}
                alt='hero'
                style={{objectFit: 'cover', objectPosition: '100% 40%', width:'100%'}} 
            />
        </SwiperSlide>
    ))

    // const thumbs = [];
    // chef.heroImages.forEach((img, index) => thumbs.push(
    //     <SwiperSlide key={`thumb-${index}`} className='thumbs-wrapper'>
    //         <img
    //             src={img}
    //             style={{ width: '250px' }}
    //             alt='thumbnail'
    //         />
    //     </SwiperSlide>
    // ))

    return (
        <>
            <div className='hero-container'>
                <div className="hero-container__main">
                    <Swiper
                        className='swiper-container'
                        // thumbs={{ swiper: thumbsSwiper }}
                        navigation
                        pagination
                        spaceBetween={0}
                        slidesPerView={1}
                    >
                        {slides}
                    </Swiper>
                </div>
                {/* <div className="hero-container__thumbs">
                    <Swiper
                        id="thumbs"
                        className="hero-container__thumbs2"
                        onSwiper={setThumbsSwiper}
                        spaceBetween={5}
                        slidesPerView={3}
                    >
                        {thumbs}
                    </Swiper>
                </div> */}
            </div>
        </>
    );
};

export default ProfileHero