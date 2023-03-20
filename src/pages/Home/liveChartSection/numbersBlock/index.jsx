import React, {useEffect, useState} from 'react';
import classes from './styles.module.scss';
import {ReactComponent as Logo} from "../../../../assets/images/logo.svg";

const NumbersBlock = () => {
    const [state, setState] = useState(0);
    const [numChange, setNumChange] = useState();

    const getNum = () => {
        fetch('https://api.qie.systems/v1/landing/rates/1h')
            .then((response) => response.json())
            .then((data) => {
                setNumChange(data.data.rates.rateChange)
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
                {numChange?.type === 'up' &&
                    <div className={classes.label}>+{numChange.changePercent}%</div>
                }
            </div>
        </div>
    );
};

export default NumbersBlock;
