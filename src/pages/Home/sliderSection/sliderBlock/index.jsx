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
                        <SlideItem
                            img={dubaiNewsImg}
                            alt={'dubai prince'}
                            date={'21 July 2022'}
                            heading={'The crown prince of Dubai says he has a "metaverse strategy"'}
                            text={'This week, Crown Prince Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum announced a new “metaverse strategy” that he says will create 40,000 new virtual jobs and add $4 billion to the city’s GDP in five years, according to a Monday tweet. “The strategy emphasises fostering talent and investing in future capabilities by providing the necessary support in metaverse education aimed at developers, content creators and users of digital platforms in the metaverse community,” the United Arab Emirates’ official news agency, WAM, wrote in a statement. Details on how the strategy will be carried out are scant, but the pillars of the plan include fostering “metaverse innovation and economic contribution,” cultivating metaverse talent, and developing metaverse use cases and applications within the Dubai government, according to Sheikh Hamdan’s Monday tweet. It was not immediately clear how much the Dubai government would invest in supporting the strategy.'}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/68-blockchain-s-biggest-innovations-are-saving-billions-each-year-for-the-world-s-largest-companies?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem
                            img={forbesNewsImg}
                            alt={'forbes news'}
                            date={'08 July 2022'}
                            heading={'Blockchain’s biggest innovations are saving billions each year for the world’s largest companies'}
                            text={'You’ve come a long way, blockchain! Since our inaugural roundup of the Blockchain 50, published in 2019, the billion-dollar companies (minimum, by sales or market value) on our annual list have moved beyond test projects and now rely on “distributed ledger” technology to do serious work. A lot of the action is in the back office, verifying insurance claims or facilitating real estate deals. It has also become vital to supply chains, whether checking the provenance of conflict minerals like cobalt or tracking auto parts for Renault. Nearly half of the Blockchain 50 are based outside the United States; 14% are Chinese. New this year: venture capital firms, which as a group invested more than $32 billion in the sector in 2021.'}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/67-citi-predicts-5-billion-users?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem
                            img={imgServer}
                            alt={'citi news'}
                            date={'12 April 2022'}
                            heading={'Citi Predicts 5 Billion Users'}
                            text={'Citi released a new Global Perspectives & Solutions (Citi GPS) report titled “Metaverse and Money: Decrypting the Future” Thursday. The leading global bank has approximately 200 million customer accounts and does business in more than 160 countries and jurisdictions. The 184-page report explores various aspects of the metaverse in-depth. They include what a metaverse is; its infrastructure; digital assets including non-fungible tokens (NFTs) in the metaverse; money and defi (decentralized finance) in the metaverse; and regulatory developments applicable to the metaverse. Regarding the size of the metaverse economy, Citi described: “We believe the metaverse may be the next generation of the internet — combining the physical and digital world in a persistent and immersive manner — and not purely a virtual reality world.”'}
                        />
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/66-4-ways-we-could-actually-use-nfts?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem
                            img={nftNewsImg}
                            alt={'nft news'}
                            date={'12 April 2022'}
                            heading={'4 ways we could actually use NFTs'}
                            text={"It's hard to escape reading about NFTs nowadays. If you need a quick refresh, NFTs are digital tokens stored on the blockchain signaling your ownership in something, like a piece of artwork. We typically read about them in association with the so-called Bored Ape Yacht Club whose sales have surpassed $1 billion, or record-setting art auctions, or how celebrities are jumping on the NFT and Web3 bandwagon. But there could actually be some practical uses for them."}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/65-building-a-transparent-supply-chain?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem
                            img={imgServer}
                            alt={'supply chain'}
                            date={'12 April 2022'}
                            heading={'Building a Transparent Supply Chain'}
                            text={'Blockchain, the digital record-keeping technology behind Bitcoin and other cryptocurrency networks, is a potential game changer in the financial world. But another area where it holds great promise is supply chain management. Blockchain can greatly improve supply chains by enabling faster and more cost-efficient delivery of products, enhancing products’ traceability, improving coordination between partners, and aiding access to financing. To better understand this opportunity, we studied seven major U.S. corporations that are leaders in supply chain management and are trying to figure out how blockchain can help solve the challenges they face. These companies—Corning, Emerson, Hayward, IBM, Mastercard, and two others that wish to remain anonymous—operate in varied industries: manufacturing, retailing, technology, and financial services.'}/>
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/64-de-beers-using-blockchain-to-authenticate-diamonds?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem
                            img={imgServer}
                            alt={'blockchain news'}
                            date={'12 April 2022'}
                            heading={'De Beers Using Blockchain to Authenticate Diamonds'}
                            text={'De Beers, the diamond unit of Anglo American, is harnessing blockchain technology to keep track of every movement of a gem. Set to launch later this year, the new industry-wide blockchain aims to document the movement of diamonds and other gems from the time they are dug up from the ground. Although cryptocurrency is the most prominent application of blockchain technology at this point, it is but one of many. Increasingly, businesses of all types have looked to the emerging technology as a means of upgrading their models, adding security and documenting transactions. (See also: Is Apple Planning to Use Blockchain?)'}
                        />
                    </a>
                    <a href='https://qiblockchain.online/index.php/component/content/article/63-what-is-blockchain?catid=15&Itemid=101' className={classes.link} target='_blank'>
                        <SlideItem
                            img={imgServer}
                            alt={'what is blockchain news'}
                            date={'12 April 2022'}
                            heading={'What Is Blockchain?'}
                            text={'At its core, blockchain is a distributed digital ledger that stores data of any kind. A blockchain can record information about cryptocurrency transactions, NFT ownership or DeFi smart contracts. While any conventional database can store this sort of information, blockchain is unique in that it’s totally decentralized. Rather than being maintained in one location, by a centralized administrator—think of an Excel spreadsheet or a bank database—many identical copies of a blockchain database are held on multiple computers spread out across a network. These individual computers are referred to as nodes.'}/>
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