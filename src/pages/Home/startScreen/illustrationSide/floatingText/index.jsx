import React from 'react';
import classes from './styles.module.scss';
import {TextBlurBg} from "components";

const FloatingText = () => {
    return (
        <div className={classes.wrapper}>
            <TextBlurBg text='Scalable and Developer' secondLine='Friendly'/>
            <TextBlurBg text='Secure, Fast'/>
            <TextBlurBg text='Eco-friendly'/>
            <TextBlurBg text='Decentralised'/>
            <TextBlurBg text='Low transaction fees'/>
            <TextBlurBg text='Easy Built' secondLine='decentralised Apps'/>
        </div>
    );
};

export default FloatingText;