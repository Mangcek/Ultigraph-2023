import { Link, Head } from '@inertiajs/react';
import React, { useRef } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import { aboutData } from './aboutData';
import "../../../css/AboutUs.scss";
import LP_purple from './LP_purple.webp';
import supergrafis1 from "../../../assets/img/supergrafis1.svg";
import supergrafis2 from "../../../assets/img/supergrafis2.svg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function AboutUs({ auth, laravelVersion, phpVersion }){

    // const pagination = {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     }
    // };
    const swiperRef = useRef(null);

  // Function to handle slide navigation
  const navigateToSlide = (slideIndex) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(slideIndex);
    }
  };
    // const swiper = useSwiper(swiperOptions);
    return(
        <>
            <Head title="About Us" />
            <Swiper
                modules={[Navigation,Pagination, EffectFade]}
                // pagination={pagination}
                effect="fade"
                navigation={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="mySwiper AboutUs__section"
            >
                {aboutData.map((data, index) => {
                    return (
                        <SwiperSlide key={index} style={{backgroundImage:`url(${data.img})`,backgroundSize:'100% auto',backgroundRepeat:"no-repeat"}}>
                            <div className="AboutUs__section__outerBorder">
                                <img src={supergrafis1} className="supergrafis1" alt="" />
                                <img src={supergrafis2} className="supergrafis2" alt="" />
                                <div class="AboutUs__section__interBorder">
                                    <h1 style={{backgroundColor:`${data.color}`}}>{data.title}</h1>
                                    <p>{data.description}</p>
                                </div>
                                
                            </div>
                            <div class="AboutUs__section__pagination">
                                {data.pagination.map((data, index) => {
                                    return(
                                        <button onClick = {()=>{navigateToSlide(index)}}>
                                            <img src={data} alt="" />
                                        </button>
                                        
                                    );
                                })}
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </>
    );
}