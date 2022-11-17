import React, {useEffect, useRef, useState} from 'react';
import SlideVideo from "./slideVideo";
import classes from './styles.module.scss';
import {ReactComponent as ArrowLeft} from '../../../../assets/images/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../../../assets/images/arrow-right.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import SlideItem from "../slideItem";
import dubaiNewsImg from "../../../../assets/images/dubai-news.webp";

const SliderBlock = () => {
    const [video, setVideo] = useState([]);
    const sliderRef = useRef();

    useEffect(() => {
        getVideoList();
    }, []);

    const getVideoList = async function () {
        axios.get('http://localhost:8000/api/v1/landing/video')
            .then((response) => {
                const videoList = response.data.data.video;
                setVideo(videoList)
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
                    {video.map((currentVideo, index) =>
                        <SlideVideo url={currentVideo.url} heading={currentVideo.title}/>
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