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
                        <SlideItem img={imgSea} alt={'sea'} date={'04 October 2022'} heading={'HovR Launches as a Fee Sharing NFT Marketplace Alongside a New Gaming NFT Collection'} text={'HovR, a project developed on the Qi blockchain, launched as a fee-sharing NFT marketplace alongside a new gaming NFT collection. Opensea had sales revenue of 5Bn USD for the month of January 2022 alone.'}/>
                    </a>
                    <a href='https://www.investing.com/news/cryptocurrency-news/hovrthe-worlds-first-ingame-nft-exchange-is-here-2852892' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'server'} date={'25 July 2022'} heading={'HovR—the World\'s First In-game NFT Exchange is Here'} text={'NFTs have come a long way. From Mike Beeple’s record-breaking NFT auction to CryptoPunks, the market has experienced tremendous growth. Despite all these, the billion-dollar emerging industry still faces many problems.'}/>
                    </a>
                    <a href='https://finance.yahoo.com/news/hovr-launches-fee-sharing-nft-130500306.html' className={classes.link} target='_blank'>
                        <SlideItem img={imgSea} alt={'sea'} date={'04 October 2022'} heading={'HovR Launches as a Fee Sharing NFT Marketplace Alongside a New Gaming NFT Collection'} text={'HovR, a project developed on the Qi blockchain, launched as a fee-sharing NFT marketplace alongside a new gaming NFT collection. Opensea had sales revenue of 5Bn USD for the month of January 2022 alone.'}/>
                    </a>
                    <a href='https://www.investing.com/news/cryptocurrency-news/hovrthe-worlds-first-ingame-nft-exchange-is-here-2852892' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'server'} date={'25 July 2022'} heading={'HovR—the World\'s First In-game NFT Exchange is Here'} text={'NFTs have come a long way. From Mike Beeple’s record-breaking NFT auction to CryptoPunks, the market has experienced tremendous growth. Despite all these, the billion-dollar emerging industry still faces many problems.'}/>
                    </a>
                    <a href='https://finance.yahoo.com/news/hovr-launches-fee-sharing-nft-130500306.html' className={classes.link} target='_blank'>
                        <SlideItem img={imgSea} alt={'sea'} date={'04 October 2022'} heading={'HovR Launches as a Fee Sharing NFT Marketplace Alongside a New Gaming NFT Collection'} text={'HovR, a project developed on the Qi blockchain, launched as a fee-sharing NFT marketplace alongside a new gaming NFT collection. Opensea had sales revenue of 5Bn USD for the month of January 2022 alone.'}/>
                    </a>
                    <a href='https://www.investing.com/news/cryptocurrency-news/hovrthe-worlds-first-ingame-nft-exchange-is-here-2852892' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'server'} date={'25 July 2022'} heading={'HovR—the World\'s First In-game NFT Exchange is Here'} text={'NFTs have come a long way. From Mike Beeple’s record-breaking NFT auction to CryptoPunks, the market has experienced tremendous growth. Despite all these, the billion-dollar emerging industry still faces many problems.'}/>
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