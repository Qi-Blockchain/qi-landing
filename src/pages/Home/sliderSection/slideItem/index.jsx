import React from 'react';
import classes from './styles.module.scss';

const SlideItem = ({img, alt, date, heading, text}) => {
    return (
        <div className={classes.wrapper}>
            <img src={img} alt={alt} className={classes.image}/>
            <p className={classes.date}>{date}</p>
            <p className={classes.heading}>{heading}</p>
            <p className={classes.text}>{text}</p>
        </div>
    );
};

export default SlideItem;