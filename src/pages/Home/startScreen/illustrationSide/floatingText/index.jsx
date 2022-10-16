import React, {useEffect, useRef} from 'react';
import classes from './styles.module.scss';
import {TextBlurBg} from "components";
import Parallax from "parallax-js";

const FloatingText = () => {
    const ref = useRef();

    useEffect(() => {
        new Parallax(ref.current)
    }, []);

    return (
        <div ref={ref} id={'scene'} className={classes.wrapper} >
            <TextBlurBg text='Scalable and Developer' secondLine='Friendly' depth={1}/>
            <TextBlurBg text='Secure, Fast' depth={1} />
            <TextBlurBg text='Eco-friendly' depth={1} />
            <TextBlurBg text='Decentralised' depth={1} />
            <TextBlurBg text='Low transaction fees' depth={1} />
            <TextBlurBg text='Easy Built' secondLine='decentralised Apps' depth={1} />
        </div>
    );
};

export default FloatingText;