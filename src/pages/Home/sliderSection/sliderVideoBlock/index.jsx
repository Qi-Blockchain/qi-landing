import React, {useEffect, useRef, useState} from 'react';
import SlideVideo from "./slideVideo";
import classes from './styles.module.scss';
import {ReactComponent as ArrowLeft} from '../../../../assets/images/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../../../assets/images/arrow-right.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBlock = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.sliderWrapper}>
                <Slider {...settings} ref={sliderRef}>
                    <SlideVideo url={'https://www.youtube.com/embed/aSDkcfBdU2c'} heading={'Byzantine Generals problem SOLVED'}/>
                    <SlideVideo url={'https://www.youtube.com/embed/6xBKV7KP8RI'} heading={'Metaverse - New version of the Internet\n'}/>
                    <SlideVideo url={'https://www.youtube.com/embed/CMqRqd97rQg'} heading={'Hovr NFT Market Place explainer video'}/>
                    <SlideVideo url={'https://www.youtube.com/embed/RVZ1DuoyUSQ'} heading={'Web 3.0 - The future of the Internet\n'}/>
                    <SlideVideo url={'https://www.youtube.com/embed/uzab9kDPw7I'} heading={'How NFT`s will change our lives'}/>
                    <SlideVideo url={'https://www.youtube.com/embed/1pMA5iu35y8'} heading={'Decentralised Finance (Defi) Explained'}/>
                </Slider>
            </div>
            <div className={classes.btnWrapper}>
                <button className={classes.button} onClick={() => sliderRef?.current?.slickPrev()}>
                    <ArrowLeft/>
                </button>
                <button className={classes.button} onClick={() => sliderRef?.current?.slickNext()}>
                    <ArrowRight/>
                </button>
            </div>
        </div>
    );
};

export default SliderBlock;