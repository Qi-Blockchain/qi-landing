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
            </Flicking>
        </div>
    );
};

export default SliderBlockMobile;