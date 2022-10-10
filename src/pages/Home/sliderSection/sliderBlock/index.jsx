import React, {useEffect, useRef, useState} from 'react';
import SlideItem from "../slideItem";
import classes from './styles.module.scss';
import {ReactComponent as ArrowLeft} from '../../../../assets/images/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../../../assets/images/arrow-right.svg';
import imgSea from '../../../../assets/images/img-1.png';
import imgServer from '../../../../assets/images/img-2.png';
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
                    <a href='https://finance.yahoo.com/news/hovr-launches-fee-sharing-nft-130500306.html' className={classes.link} target='_blank'>
                        <SlideItem img={imgSea} alt={'sea'} date={'12 April 2022'} heading={'Citi Predicts 5 Billion Users'} text={'Citi has predicted that the total market for the metaverse economy could grow to between $8 trillion and $13 trillion by 2030. In addition, the global bank expects ...'}/>
                    </a>
                    <a href='https://www.investing.com/news/cryptocurrency-news/hovrthe-worlds-first-ingame-nft-exchange-is-here-2852892' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'server'} date={'12 April 2022'} heading={'Blockchain’s biggest innovations are saving billions each year for the world’s largest companies'} text={'Citi has predicted that the total market for the metaverse economy could grow to between $8 trillion and $13 trillion by 2030. In addition, the global bank expects ...'}/>
                    </a>
                    <a href='https://finance.yahoo.com/news/hovr-launches-fee-sharing-nft-130500306.html' className={classes.link} target='_blank'>
                        <SlideItem img={imgSea} alt={'sea'} date={'12 April 2022'} heading={'Citi Predicts 5 Billion Users'} text={'Citi has predicted that the total market for the metaverse economy could grow to between $8 trillion and $13 trillion by 2030. In addition, the global bank expects ...'}/>
                    </a>
                    <a href='https://www.investing.com/news/cryptocurrency-news/hovrthe-worlds-first-ingame-nft-exchange-is-here-2852892' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'server'} date={'12 April 2022'} heading={'Blockchain’s biggest innovations are saving billions each year for the world’s largest companies'} text={'Citi has predicted that the total market for the metaverse economy could grow to between $8 trillion and $13 trillion by 2030. In addition, the global bank expects ...'}/>
                    </a>
                    <a href='https://finance.yahoo.com/news/hovr-launches-fee-sharing-nft-130500306.html' className={classes.link} target='_blank'>
                        <SlideItem img={imgSea} alt={'sea'} date={'12 April 2022'} heading={'Citi Predicts 5 Billion Users'} text={'Citi has predicted that the total market for the metaverse economy could grow to between $8 trillion and $13 trillion by 2030. In addition, the global bank expects ...'}/>
                    </a>
                    <a href='https://www.investing.com/news/cryptocurrency-news/hovrthe-worlds-first-ingame-nft-exchange-is-here-2852892' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'server'} date={'12 April 2022'} heading={'Blockchain’s biggest innovations are saving billions each year for the world’s largest companies'} text={'Citi has predicted that the total market for the metaverse economy could grow to between $8 trillion and $13 trillion by 2030. In addition, the global bank expects ...'}/>
                    </a>
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