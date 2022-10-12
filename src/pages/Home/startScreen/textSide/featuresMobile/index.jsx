import React from 'react';
import Flicking from "@egjs/react-flicking";
import {TextBlurBg} from "components";
import classes from "./styles.module.scss";
import "@egjs/react-flicking/dist/flicking.css";

const FeaturesMobile = () => {
    return (
        <div className={classes.wrapper}>
            <div className={'flick-custom'}>
                <Flicking moveType="freeScroll" bound={true}>
                    <div className={classes.sliderWrapper}>
                        <TextBlurBg text='Scalable and Developer Friendly'/>
                    </div>
                    <div className={classes.sliderWrapper}>
                        <TextBlurBg text='Secure, Fast'/>
                    </div>
                    <div className={classes.sliderWrapper}>
                        <TextBlurBg text='Eco-friendly'/>
                    </div>
                    <div className={classes.sliderWrapper}>
                        <TextBlurBg text='Decentralised'/>
                    </div>
                    <div className={classes.sliderWrapper}>
                        <TextBlurBg text='Low transaction fees'/>
                    </div>
                    <div className={classes.sliderWrapper}>
                        <TextBlurBg text='Easy Built decentralised Apps'/>
                    </div>
                </Flicking>
            </div>
        </div>
    );
};

export default FeaturesMobile;