import React, {useEffect, useRef, useState} from 'react';
import SlideItem from "../slideItem";
import classes from './styles.module.scss';
import {ReactComponent as ArrowLeft} from '../../../../assets/images/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../../../assets/images/arrow-right.svg';
import dubaiNewsImg from '../../../../assets/images/dubai-news.webp';
import forbesNewsImg from '../../../../assets/images/forbes-news.jpeg';
import nftNewsImg from '../../../../assets/images/nfts-news.jpeg';
import imgSea from '../../../../assets/images/ef8525717d00b63651ecc117d578f04e.webp';
import imgServer from '../../../../assets/images/LYNXMPEE0502N_L.jpeg';
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
                    <a href='https://qiblockchain.online/index.php/component/content/article/69-the-crown-prince-of-dubai-says-he-has-a-metaverse-strategy?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem img={dubaiNewsImg} alt={'dubai prince'} date={'21 July 2022'} heading={'The crown prince of Dubai says he has a "metaverse strategy"'} text={'The crown prince of Dubai says he has a ‘metaverse strategy’ that will add 40,000 jobs and $4 billion to the economy in 5 years'}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/68-blockchain-s-biggest-innovations-are-saving-billions-each-year-for-the-world-s-largest-companies?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem img={forbesNewsImg} alt={'forbes news'} date={'08 July 2022'} heading={'Blockchain’s biggest innovations are saving billions each year for the world’s largest companies'} text={'Cryptocurrencies hog the spotlight, but blockchain’s biggest innovations are below the surface, saving billions each year for the world’s largest companies.'}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/67-citi-predicts-5-billion-users?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'citi news'} date={'12 April 2022'} heading={'Citi Predicts 5 Billion Users'} text={'Citi Predicts Metaverse Could Be $13 Trillion Opportunity With 5 Billion Users'}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/66-4-ways-we-could-actually-use-nfts?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem img={nftNewsImg} alt={'nft news'} date={'12 April 2022'} heading={'4 ways we could actually use NFTs'} text={"4 ways we could actually use NFTs in the real world that don't involve cartoons of bored apes"}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/65-building-a-transparent-supply-chain?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'supply chain'} date={'12 April 2022'} heading={'Building a Transparent Supply Chain'} text={'Blockchain, the digital record-keeping technology behind Bitcoin and other cryptocurrency networks, is a potential game changer in the financial world. But another area where it holds great promise is supply chain management'}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/64-de-beers-using-blockchain-to-authenticate-diamonds?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'blockchain news'} date={'12 April 2022'} heading={'De Beers Using Blockchain to Authenticate Diamonds'} text={'De Beers, the diamond unit of Anglo American, is harnessing blockchain technology to keep track of every movement of a gem'}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/63-what-is-blockchain?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem img={imgServer} alt={'what is blockchain news'} date={'12 April 2022'} heading={'What Is Blockchain?'} text={'Blockchain is the innovative database technology that’s at the heart of nearly all cryptocurrencies.'}/>
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