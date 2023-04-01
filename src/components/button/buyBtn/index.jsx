import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as CoinIcon} from "../../../assets/images/coin-icon.svg";

const BuyNowBtn = ({onClick}) => {
    return (
        <button className={classes.button} onClick={onClick}>
            <span className={classes.text}>Buy Now</span>
            <CoinIcon/>
        </button>
    );
};

export default BuyNowBtn;