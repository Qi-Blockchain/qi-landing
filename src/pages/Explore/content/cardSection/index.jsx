import React from 'react';
import classes from './styles.module.scss';

const CardSection = ({sectionName, children}) => {
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.heading}>{sectionName}</h3>
            <div className={classes.cardGrid}>
                {children}
            </div>
        </div>
    );
};

export default CardSection;