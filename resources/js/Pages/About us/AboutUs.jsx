import { Link, Head } from '@inertiajs/react';
import React, { useRef, useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import { aboutData } from './aboutData';
import "../../../css/AboutUs.scss";
import supergrafis1 from "../../../assets/img/supergrafis1.svg";
import supergrafis2 from "../../../assets/img/supergrafis2.svg";
import arrow from "../../../assets/img/arrow_white_right.gif"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function AboutUs({ auth, laravelVersion, phpVersion }){
    const swiperRef = useRef(null);

    // Function to handle slide navigation
    const navigateToSlide = (slideIndex) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(slideIndex);
        }
    };

    const [navColor, setNavColor] = useState("#F37786")

    // const swiper = useSwiper(swiperOptions);

    function DynamicNavbar(props) {
        return <Navbar current="AboutUs" color={props.color} />;
    }

    return(
        <>
            <Head title="About Us" />
            <DynamicNavbar color={navColor} />
            <Swiper
                modules={[Navigation,Pagination, EffectFade]}
                // pagination={pagination}
                effect="fade"
                fadeEffect={{crossFade: true}}
                navigation={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                    setNavColor(aboutData[swiper.activeIndex].color)
                }}
                className="mySwiper AboutUs__section"
            >
                {aboutData.map((data, index) => {
                    return (
                        <SwiperSlide key={index} style={{ backgroundImage: `url(${data.img})`, backgroundSize: window.innerWidth <= 1600 ? 'auto 100%' : '100% 100%',backgroundRepeat: 'no-repeat'}}>
                            <div className="AboutUs__section__swipe">
                                <img src={arrow} style={{opacity:`${data.arrow[0]}`}} className="arrow-left" alt="" />
                                <h1>SWIPE</h1>
                                <img src={arrow} style={{opacity:`${data.arrow[1]}`}} className="arrow-right" alt="" />
                            </div>
                            <div className="AboutUs__section__outerBorder">
                                <img src={supergrafis1} className="supergrafis1" alt="" />
                                <img src={supergrafis2} className="supergrafis2" alt="" />
                                <div className="AboutUs__section__interBorder">
                                    <div><h1 style={{backgroundColor:`${data.color}`}}>{data.title}</h1>
                                    <p>{data.description}</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="AboutUs__section__pagination">
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
            <Footer />
        </>
    );
}