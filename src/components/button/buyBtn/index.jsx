import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as CoinIcon} from "../../../assets/images/coin-icon.svg";

const BuyNowBtn = () => {
    return (
        <button className={classes.button}>
            Buy Now
            <CoinIcon/>
        </button>
    );
};

export default BuyNowBtn;