import React from 'react';
import classes from './styles.module.scss';

const SectionHeading = () => {
    return (
        <div>
            <h3 className={classes.heading}>Why <span className={classes.highlight}>QIE</span> ?</h3>
        </div>
    );
};

export default SectionHeading;