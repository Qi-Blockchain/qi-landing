import React from 'react';
import TextSide from "./textSide";
import IllustrationSide from "./illustrationSide";
import classes from './styles.module.scss';
import FloatingObjects from "./illustrationSide/floatingObjects";
import useScreenWidth from "../../../hook/useScreenWIdth";
import FloatingObjectsMobile from "./illustrationSide/floatingObjectsMobile";

const StartScreen = () => {
    const screen = useScreenWidth();
    return (
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                {screen < 1025 ?
                    <FloatingObjectsMobile/>
                    :
                    <></>
                }
                <TextSide/>
                <div className={classes.blockContainer}>
                    <IllustrationSide/>
                </div>
            </section>
        </div>
    );
};

export default StartScreen;