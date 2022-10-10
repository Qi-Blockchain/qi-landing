import React from 'react';
import Flicking from "@egjs/react-flicking";
import {TextBlurBg} from "components";
import classes from "./styles.module.scss";
import "@egjs/react-flicking/dist/flicking.css";

const FeaturesMobile = () => {
    return (
        <div className={classes.wrapper}>
            <Flicking moveType="freeScroll" gap={40} bound={true}>
                <div>
                    <TextBlurBg text='Scalable and Developer Friendly'/>
                </div>
                <div>
                    <TextBlurBg text='Secure, Fast'/>
                </div>
                <div>
                    <TextBlurBg text='Eco-friendly'/>
                </div>
                <div>
                    <TextBlurBg text='Decentralised'/>
                </div>
                <div>
                    <TextBlurBg text='Low transaction fees'/>
                </div>
                <div>
                    <TextBlurBg text='Easy Built decentralised Apps'/>
                </div>
            </Flicking>
        </div>
    );
};

export default FeaturesMobile;