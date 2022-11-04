import React from 'react';
import classes from './styles.module.scss';
import SectionHeading from "./sectionHeading";
import NumbersBlock from "./numbersBlock";
import {BuyBtn} from "components";
import ChartBlock from "./chartBlock";
import rockChart from "../../../assets/images/rock-chart.png";

const LiveChartSection = () => {
    return (
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                <div className={classes.bodyWrapper}>
                    <div className={classes.blockWrapper}>
                        <SectionHeading/>
                        <NumbersBlock/>
                        <div className={classes.btnWrapper}>
                            <BuyBtn link={'https://www.xt.com/trade/qie_usdt'}/>
                            {/*<div className={classes.text}>Available on XT, bitmart  digifinex and 55 more</div>*/}
                        </div>
                    </div>
                    <div className={classes.chartBlockWrapper}>
                        <ChartBlock/>
                    </div>
                </div>
                <div className={classes.footerWrapper}>
                    Buy on
                    &nbsp;
                    <a className={classes.link} href={'https://p2pb2b.com/trade/QIE_USDT/'} target={'_blank'} rel="noopener noreferrer">
                        p2pb2b
                    </a>
                    ,
                    &nbsp;
                    <a className={classes.link} href={'https://www.digifinex.com/en-ww/trade/USDT/QIE'} target={'_blank'} rel="noopener noreferrer">
                        digifinex
                    </a>,
                    &nbsp;
                    <a target={'_blank'} className={classes.link} href={'https://www.bitmart.com/trade/en?symbol=QIE_USDT&layout=basic'} rel="noopener noreferrer">
                        bitmart
                    </a>,
                    &nbsp;
                    <a className={classes.link} href={'https://www.xt.com/trade/qie_usdt'} target={'_blank'} rel="noopener noreferrer">
                        xt.com
                    </a>
                </div>
            </section>
            <div className={classes.rock}>
                <img src={rockChart} alt="rock chart"/>
            </div>
        </div>
    );
};

export default LiveChartSection;