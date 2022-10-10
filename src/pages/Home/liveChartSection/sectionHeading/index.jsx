import React from 'react';
import classes from './styles.module.scss';

const SectionHeading = () => {
    return (
        <div>
            <h3 className={classes.heading}>Qie Price <span className={classes.highlight}>Live</span> Data</h3>
        </div>
    );
};

export default SectionHeading;