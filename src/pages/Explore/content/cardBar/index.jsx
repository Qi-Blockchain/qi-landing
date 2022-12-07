import React, {useRef} from 'react';
import Slider from "react-slick";
import config from './config';
import CardItem from "./cardItem";
import classes from './styles.module.scss';

const CardBar = ({activeCard, setActiveCard}) => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '25px',
        responsive: [
            {
                breakpoint: 10000,
                settings: 'unslick'
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <Slider ref={sliderRef} {...settings} className='slick-slider-card'>
            {config.map((card, index) => (
                <CardItem
                    key={card.id}
                    heading={card.heading}
                    text={card.text}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                    cardIndex={index}
                />
            ))}
        </Slider>
    );
};

export default CardBar;