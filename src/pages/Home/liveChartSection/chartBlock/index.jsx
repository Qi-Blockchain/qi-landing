import React from 'react';
import Heading from "./heading";
import {Select} from "components";
import classes from './styles.module.scss';
import Chart from "./chart";

const ChartBlock = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.headingDesktop}>
                <Heading/>
            </div>
            {/*<div className={classes.selectWrapper}>*/}
            {/*    <Select id={'market'} options={['Price', 'Market Cap', 'Candle Chart']}/>*/}
            {/*    <Select id={'time'} options={['1D', '7D', '1M', '3M', '1Y']}/>*/}
            {/*</div>*/}
            <Chart/>
            <div className={classes.headingMobile}>
                <Heading/>
            </div>
        </div>
    );
};

export default ChartBlock;