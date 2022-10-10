import React from 'react';
import classes from "../sliderBlock/styles.module.scss";
import SlideItem from "../slideItem";
import imgSea from "../../../../assets/images/img-1.png";
import imgServer from "../../../../assets/images/img-2.png";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const SliderBlockMobile = () => {
    return (
        <div>
            <Flicking align="prev">
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
            </Flicking>
        </div>
    );
};

export default SliderBlockMobile;