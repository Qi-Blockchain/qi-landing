import React from 'react';
import TextSide from "./textSide";
import IllustrationSide from "./illustrationSide";
import classes from './styles.module.scss';

const StartScreen = () => {
    return (
        <section className={classes.wrapper}>
            <TextSide/>
            <div className={classes.blockContainer}>
                <IllustrationSide/>
            </div>
        </section>
    );
};

export default StartScreen;