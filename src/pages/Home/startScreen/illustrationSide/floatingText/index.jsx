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
            <TextBlurBg text='Scalable and Developer' secondLine='Friendly' depth={0.1}/>
            <TextBlurBg text='Secure, Fast' depth={0.3} />
            <TextBlurBg text='Eco-friendly' depth={0.5} />
            <TextBlurBg text='Decentralised' depth={0.7} />
            <TextBlurBg text='Low transaction fees' depth={0.9} />
            <TextBlurBg text='Easy Built' secondLine='decentralised Apps' depth={1} />
        </div>
    );
};

export default FloatingText;