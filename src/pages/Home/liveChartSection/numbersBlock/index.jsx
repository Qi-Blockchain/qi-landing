import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as Logo} from "../../../../assets/images/logo.svg";

const NumbersBlock = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.headingWrapper}>
                <div className={classes.logoWrapper}>
                    <Logo/>
                </div>
                <div>
                    <div className={classes.text}>QI Blockchain</div>
                    <div className={classes.subtext}>QIE</div>
                </div>
            </div>
            <div className={classes.priceWrapper}>
                <div className={classes.price}>$0.1169</div>
                <div className={classes.label}>+4.47%</div>
            </div>
        </div>
    );
};

export default NumbersBlock;