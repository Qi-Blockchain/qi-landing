import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as CoinIcon} from "../../../assets/images/coin-icon.svg";

const BuyNowBtn = ({link}) => {
    return (
        <button className={classes.button}>
            <a href={link} target={'_blank'} rel="noopener noreferrer">
                <span className={classes.text}>Buy Now</span>
                <CoinIcon/>
            </a>
        </button>
    );
};

export default BuyNowBtn;