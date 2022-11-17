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
import ratesApi from "../../../../services/endpoints/rates";
import axios from "axios";

const SliderBlock = () => {
    const [news, setNews] = useState([]);
    const sliderRef = useRef();

    useEffect(() => {
        getNewsList();
    }, []);

    const getNewsList = async function () {
        axios.get('https://api.qie.systems/v1/landing/news')
            .then((response) => {
                const newsList = response.data.data.news;
                setNews(newsList)
            })
            .catch(error => console.error('Error: ' + error));
    }

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
                    {news.map((currentNews, index) =>
                        <a href={currentNews.url} className={classes.link} target='_blank' rel="noopener noreferrer" key={index}>
                            <SlideItem
                                img={dubaiNewsImg}
                                alt={'dubai prince'}
                                date={currentNews.published_at}
                                heading={currentNews.title}
                                text={currentNews.content}/>
                        </a>
                    )}
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