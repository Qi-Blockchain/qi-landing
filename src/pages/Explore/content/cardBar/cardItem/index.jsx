import React from 'react';
import classes from './styles.module.scss';

const CardItem = ({heading, text}) => {
    return (
        <div className={classes.wrapper}>
            <h6 className={classes.heading}>{heading}</h6>
            <p className={classes.text}>{text}</p>
        </div>
    );
};

export default CardItem;