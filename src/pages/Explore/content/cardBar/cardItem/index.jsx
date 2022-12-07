import React from 'react';
import classNames from "classnames";
import classes from './styles.module.scss';

const CardItem = ({heading, text, activeCard, setActiveCard, cardIndex}) => {
    const wrapperClass = () => classNames({
        [classes.wrapper]: true,
        [classes.wrapperActive]: activeCard === cardIndex,
    })
    return (
        <div className={wrapperClass()} onClick={() => setActiveCard(cardIndex)}>
            <h6 className={classes.heading}>{heading}</h6>
            <p className={classes.text}>{text}</p>
        </div>
    );
};

export default CardItem;