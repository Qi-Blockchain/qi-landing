import React, {useEffect, useState} from 'react';
import classes from './styles.module.scss';
import {ReactComponent as Logo} from "../../../../assets/images/logo.svg";

const NumbersBlock = () => {
    const  [state, setState] = useState(0);

    const getNum = () => {
        fetch('https://solo.qi.mineradnow.space/api2/v1/token/QIE/rates?period=1h')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setState(data.data.rates.rateData[data.data.rates.rateData.length - 1].rate.toFixed(4))
            });
    }

    useEffect(() => {
        getNum();
    }, []);

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
                <div className={classes.price}>${state}</div>
                {/*<div className={classes.label}>+4.47%</div>*/}
            </div>
        </div>
    );
};

export default NumbersBlock;