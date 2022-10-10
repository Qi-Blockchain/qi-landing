import React from 'react';
import classes from './styles.module.scss';
import FloatingObject from "./floatingObject";

const FloatingSection = () => {
    return (
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                <FloatingObject text={'Qi Blockchain Explorer'}/>
                <FloatingObject text={'Developer Resources'}/>
                <FloatingObject text={'Qi Blockchain Testnet'}/>
            </section>
        </div>
    );
};

export default FloatingSection;