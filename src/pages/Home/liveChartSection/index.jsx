import React from 'react';
import classes from './styles.module.scss';
import SectionHeading from "./sectionHeading";
import NumbersBlock from "./numbersBlock";
import {BuyBtn} from "components";
import ChartBlock from "./chartBlock";

const LiveChartSection = () => {
    return (
        <section className={classes.wrapper}>
            <div className={classes.bodyWrapper}>
                <div className={classes.blockWrapper}>
                    <SectionHeading/>
                    <NumbersBlock/>
                    <div className={classes.btnWrapper}>
                        <BuyBtn/>
                        <div className={classes.text}>Available on XT, bitmart  digifinex and 55 more</div>
                    </div>
                </div>
                <div className={classes.chartBlockWrapper}>
                    <ChartBlock/>
                </div>
            </div>
            <div className={classes.footerWrapper}>
                Buy on
                &nbsp;
                <a className={classes.link} href={'#'}>
                    p2pb2b
                </a>
                ,
                &nbsp;
                <a className={classes.link} href={'#'}>
                    digifinex
                </a>,
                &nbsp;
                <a className={classes.link} href={'#'}>
                    bitmart
                </a>
                &nbsp;
                <a className={classes.link} href={'#'}>
                    xt.com
                </a>
            </div>
        </section>
    );
};

export default LiveChartSection;