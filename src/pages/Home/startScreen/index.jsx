import React from 'react';
import TextSide from "./textSide";
import IllustrationSide from "./illustrationSide";
import classes from './styles.module.scss';

const StartScreen = () => {
    return (
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                <TextSide/>
                <div className={classes.blockContainer}>
                    <IllustrationSide/>
                </div>
            </section>
        </div>
    );
};

export default StartScreen;