import React from 'react';
import classes from './styles.module.scss';
import coinmarketcap from '../../assets/images/coinmarket.png';
import benzinga from '../../assets/images/benzinga.png';
import coinspeaker from '../../assets/images/coinspeaker.png';
import market from '../../assets/images/market.png';
import watch from '../../assets/images/watch.png';
import businessInsider from '../../assets/images/business_insider.png';
import walletInvestor from '../../assets/images/waller-investor.png';
import bloomberg from '../../assets/images/bloomberg.png';
import coinGecko from '../../assets/images/coingecko.png';
import techBullion from '../../assets/images/techbullion.png';
import digitalJournal from '../../assets/images/digital-journal.png';
import menafn from '../../assets/images/menafn.png';
import investingCom from '../../assets/images/investing-com.png';
import yahooFinance from '../../assets/images/yahoo-finance.png';
import {ReactComponent as Forbes} from '../../assets/images/forbes-icon.svg';
import {Link} from "react-router-dom";
import {ROUTES} from "../../constant";

const MentionLinks = () => {
    return (
        <div className={classes.wrapper}>
            <a href='https://coinmarketcap.com/' target='_blank' rel="noopener noreferrer">
                <img src={coinmarketcap} alt="coinmarketcap"/>
            </a>
            <a href='https://www.benzinga.com/' target='_blank' rel="noopener noreferrer">
                <img src={benzinga} alt="benzinga"/>
            </a>
            <a href='https://www.coinspeaker.com/' target='_blank' rel="noopener noreferrer">
                <img src={coinspeaker} alt="coinspeaker"/>
            </a>
            <Link to={ROUTES.HOMEPAGE}>
                <img src={market} alt="market"/>
            </Link>
            <Link to={ROUTES.HOMEPAGE}>
                <img src={watch} alt="watch"/>
            </Link>
            <a href='https://www.businessinsider.com/' target='_blank' rel="noopener noreferrer">
                <img src={businessInsider} alt="businessInsider"/>
            </a>
            <a href='https://walletinvestor.com/'  target='_blank' rel="noopener noreferrer">
                <img src={walletInvestor} alt="walletInvestor"/>
            </a>
            <a href='https://www.bloomberg.com/'  target='_blank' rel="noopener noreferrer">
                <img src={bloomberg} alt="bloomberg"/>
            </a>
            <a href='https://www.coingecko.com/' target='_blank' rel="noopener noreferrer">
                <img src={coinGecko} alt="coinGecko"/>
            </a>
            <a href='https://techbullion.com/' target='_blank' rel="noopener noreferrer">
                <img src={techBullion} alt="techBullion"/>
            </a>
            <a href='https://www.digitaljournal.com/' target='_blank' rel="noopener noreferrer">
                <img src={digitalJournal} alt="digitalJournal"/>
            </a>
            <a href='https://menafn.com/' target='_blank' rel="noopener noreferrer">
                <img src={menafn} alt="menafn"/>
            </a>
            <a href='https://www.investing.com/' target='_blank' rel="noopener noreferrer">
                <img src={investingCom} alt="investingCom"/>
            </a>
            <a href='https://finance.yahoo.com/' target='_blank' rel="noopener noreferrer">
                <img src={yahooFinance} alt="yahooFinance"/>
            </a>
            <a href='https://www.forbes.com/' target='_blank' className={classes.linkSvg} rel="noopener noreferrer">
                <Forbes/>
            </a>
        </div>
    );
};

export default MentionLinks;