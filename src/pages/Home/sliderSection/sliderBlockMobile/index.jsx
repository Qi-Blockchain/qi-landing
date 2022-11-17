import React, {useEffect, useState} from 'react';
import classes from "../sliderBlock/styles.module.scss";
import SlideItem from "../slideItem";
import imgSea from '../../../../assets/images/ef8525717d00b63651ecc117d578f04e.webp';
import imgServer from '../../../../assets/images/LYNXMPEE0502N_L.jpeg';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import dubaiNewsImg from "../../../../assets/images/dubai-news.webp";
import forbesNewsImg from "../../../../assets/images/forbes-news.jpeg";
import nftNewsImg from "../../../../assets/images/nfts-news.jpeg";
import axios from "axios";

const SliderBlockMobile = () => {
    const [news, setNews] = useState([]);

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
    return (
        <div>
            <Flicking align="prev">
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
            </Flicking>
        </div>
    );
};

export default SliderBlockMobile;