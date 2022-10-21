import React from 'react';
import classes from "../sliderBlock/styles.module.scss";
import SlideItem from "../slideItem";
import imgSea from '../../../../assets/images/ef8525717d00b63651ecc117d578f04e.webp';
import imgServer from '../../../../assets/images/LYNXMPEE0502N_L.jpeg';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import dubaiNewsImg from "../../../../assets/images/dubai-news.webp";
import forbesNewsImg from "../../../../assets/images/forbes-news.jpeg";
import nftNewsImg from "../../../../assets/images/nfts-news.jpeg";

const SliderBlockMobile = () => {
    return (
        <div>
            <Flicking align="prev">
                <a href='https://finance.yahoo.com/finance/news/qie-mining-pools-now-available-043300360.html' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={dubaiNewsImg}
                        alt={'dubai prince'}
                        date={'11 October 2022'}
                        heading={'QIE Mining Pools are Now Available on QI Blockchain'}
                        text={'QIE mining pools are now available on QI blockchain, a decentralised POW (Proof of work) blockchain. This move will allow users to mine QI blockchain’s native cryptocurrency called QIE in a similar way one could mine Bitcoin in 2011 to verify transactions on the network. Mining has always been a rewarding operation, and several miners have reportedly earned billions of dollars during the initial days of crypto mining. But, of late, rewards have been reduced considerably for most coins. Bitcoin, for instance, halves the rewards for mining blocks every four years. So, while miners earned 50 BTC in 2012, the rewards have reduced to 6.25 in 2022 and will further fall to 3.125 in 2024. That’s a considerable drop in earnings, and since the prices of mining rigs, their upkeep, and power have gone up, mining Bitcoin isn’t as appealing or profitable as it used to be. But all hope is not lost yet! There are other blockchains offering lucrative rewards, and QI Blockchain seems to be the preferred option amongst miners.'}/>
                </a>
                <a href='https://www.yahoo.com/now/hovr-launches-fee-sharing-nft-130500306.html' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={dubaiNewsImg}
                        alt={'dubai prince'}
                        date={'4 October 2022'}
                        heading={'HovR Launches as a Fee Sharing NFT Marketplace Alongside a New Gaming NFT Collection\n'}
                        text={'HovR, a project developed on the Qi blockchain, launched as a fee-sharing NFT marketplace alongside a new gaming NFT collection. Opensea had sales revenue of 5Bn USD for the month of January 2022 alone. What if the fee can be shared? Trading is exciting and profitable, but one cannot ignore the associated risks. The volatile crypto market has witnessed several ups and downs, and the recent market crash wiped off billions of USD. It led to many investors seeking options that provide a passive income and offer sustainability and long-term growth. The search ends with HovR, a platform that allows users to develop a Web 3.0 domain, generate NFTs that can be used both in games and the metaverse, and experiment with a wide range of assets that can be used as NFTs.'}/>
                </a>
                <a href='https://www.yahoo.com/now/worlds-first-game-nft-exchange-131800034.html' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={dubaiNewsImg}
                        alt={'dubai prince'}
                        date={'21 July 2022'}
                        heading={"The World's First In-Game NFT Exchange HovR Officially Launched"}
                        text={'Vortx Capital Pty LTD, a software investment company with an investment mandate that focuses on actual revenue, zero hype, and real blockchain use cases, has announced the launch of HovR—the world\'s first in-gaming NFT exchange for cross-game items and player incentivization. Most of the existing NFT marketplaces require high transaction fees, some ranging from $80 to over $250, to mint an NFT. While a second-layer blockchain serves as a suitable alternative, converting coins is tedious and a technical nightmare for the average user.'}/>
                </a>
                <a href='https://qiblockchain.online/index.php/component/content/article/69-the-crown-prince-of-dubai-says-he-has-a-metaverse-strategy?catid=15&Itemid=101' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={dubaiNewsImg}
                        alt={'dubai prince'}
                        date={'21 July 2022'}
                        heading={'The crown prince of Dubai says he has a "metaverse strategy"'}
                        text={'This week, Crown Prince Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum announced a new “metaverse strategy” that he says will create 40,000 new virtual jobs and add $4 billion to the city’s GDP in five years, according to a Monday tweet. “The strategy emphasises fostering talent and investing in future capabilities by providing the necessary support in metaverse education aimed at developers, content creators and users of digital platforms in the metaverse community,” the United Arab Emirates’ official news agency, WAM, wrote in a statement. Details on how the strategy will be carried out are scant, but the pillars of the plan include fostering “metaverse innovation and economic contribution,” cultivating metaverse talent, and developing metaverse use cases and applications within the Dubai government, according to Sheikh Hamdan’s Monday tweet. It was not immediately clear how much the Dubai government would invest in supporting the strategy.'}/>
                </a>
                <a href='https://qiblockchain.online/index.php/component/content/article/68-blockchain-s-biggest-innovations-are-saving-billions-each-year-for-the-world-s-largest-companies?catid=15&Itemid=101' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={forbesNewsImg}
                        alt={'forbes news'}
                        date={'08 July 2022'}
                        heading={'Blockchain’s biggest innovations are saving billions each year for the world’s largest companies'}
                        text={'You’ve come a long way, blockchain! Since our inaugural roundup of the Blockchain 50, published in 2019, the billion-dollar companies (minimum, by sales or market value) on our annual list have moved beyond test projects and now rely on “distributed ledger” technology to do serious work. A lot of the action is in the back office, verifying insurance claims or facilitating real estate deals. It has also become vital to supply chains, whether checking the provenance of conflict minerals like cobalt or tracking auto parts for Renault. Nearly half of the Blockchain 50 are based outside the United States; 14% are Chinese. New this year: venture capital firms, which as a group invested more than $32 billion in the sector in 2021.'}/>
                </a>
                <a href='https://qiblockchain.online/index.php/component/content/article/67-citi-predicts-5-billion-users?catid=15&Itemid=101' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={imgServer}
                        alt={'citi news'}
                        date={'12 April 2022'}
                        heading={'Citi Predicts 5 Billion Users'}
                        text={'Citi released a new Global Perspectives & Solutions (Citi GPS) report titled “Metaverse and Money: Decrypting the Future” Thursday. The leading global bank has approximately 200 million customer accounts and does business in more than 160 countries and jurisdictions. The 184-page report explores various aspects of the metaverse in-depth. They include what a metaverse is; its infrastructure; digital assets including non-fungible tokens (NFTs) in the metaverse; money and defi (decentralized finance) in the metaverse; and regulatory developments applicable to the metaverse. Regarding the size of the metaverse economy, Citi described: “We believe the metaverse may be the next generation of the internet — combining the physical and digital world in a persistent and immersive manner — and not purely a virtual reality world.”'}
                    />
                </a>
                <a href='https://qiblockchain.online/index.php/component/content/article/66-4-ways-we-could-actually-use-nfts?catid=15&Itemid=101' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={nftNewsImg}
                        alt={'nft news'}
                        date={'12 April 2022'}
                        heading={'4 ways we could actually use NFTs'}
                        text={"It's hard to escape reading about NFTs nowadays. If you need a quick refresh, NFTs are digital tokens stored on the blockchain signaling your ownership in something, like a piece of artwork. We typically read about them in association with the so-called Bored Ape Yacht Club whose sales have surpassed $1 billion, or record-setting art auctions, or how celebrities are jumping on the NFT and Web3 bandwagon. But there could actually be some practical uses for them."}/>
                </a>
                <a href='https://qiblockchain.online/index.php/component/content/article/65-building-a-transparent-supply-chain?catid=15&Itemid=101' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={imgServer}
                        alt={'supply chain'}
                        date={'12 April 2022'}
                        heading={'Building a Transparent Supply Chain'}
                        text={'Blockchain, the digital record-keeping technology behind Bitcoin and other cryptocurrency networks, is a potential game changer in the financial world. But another area where it holds great promise is supply chain management. Blockchain can greatly improve supply chains by enabling faster and more cost-efficient delivery of products, enhancing products’ traceability, improving coordination between partners, and aiding access to financing. To better understand this opportunity, we studied seven major U.S. corporations that are leaders in supply chain management and are trying to figure out how blockchain can help solve the challenges they face. These companies—Corning, Emerson, Hayward, IBM, Mastercard, and two others that wish to remain anonymous—operate in varied industries: manufacturing, retailing, technology, and financial services.'}/>
                </a>
                <a href='https://qiblockchain.online/index.php/component/content/article/64-de-beers-using-blockchain-to-authenticate-diamonds?catid=15&Itemid=101' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={imgServer}
                        alt={'blockchain news'}
                        date={'12 April 2022'}
                        heading={'De Beers Using Blockchain to Authenticate Diamonds'}
                        text={'De Beers, the diamond unit of Anglo American, is harnessing blockchain technology to keep track of every movement of a gem. Set to launch later this year, the new industry-wide blockchain aims to document the movement of diamonds and other gems from the time they are dug up from the ground. Although cryptocurrency is the most prominent application of blockchain technology at this point, it is but one of many. Increasingly, businesses of all types have looked to the emerging technology as a means of upgrading their models, adding security and documenting transactions. (See also: Is Apple Planning to Use Blockchain?)'}
                    />
                </a>
                <a href='https://qiblockchain.online/index.php/component/content/article/63-what-is-blockchain?catid=15&Itemid=101' className={classes.link} target='_blank' rel="noopener noreferrer">
                    <SlideItem
                        img={imgServer}
                        alt={'what is blockchain news'}
                        date={'12 April 2022'}
                        heading={'What Is Blockchain?'}
                        text={'At its core, blockchain is a distributed digital ledger that stores data of any kind. A blockchain can record information about cryptocurrency transactions, NFT ownership or DeFi smart contracts. While any conventional database can store this sort of information, blockchain is unique in that it’s totally decentralized. Rather than being maintained in one location, by a centralized administrator—think of an Excel spreadsheet or a bank database—many identical copies of a blockchain database are held on multiple computers spread out across a network. These individual computers are referred to as nodes.'}/>
                </a>
            </Flicking>
        </div>
    );
};

export default SliderBlockMobile;