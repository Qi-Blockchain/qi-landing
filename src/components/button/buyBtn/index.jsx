import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as CoinIcon} from "../../../assets/images/coin-icon.svg";

const BuyNowBtn = ({link}) => {
    return (
        <button className={classes.button}>
            <a href={link} target={'_blank'}>
                Buy Now
                <CoinIcon/>
            </a>
        </button>
    );
};

export default BuyNowBtn;