import React from 'react';
import classes from './styles.module.scss';

const SectionHeading = () => {
    return (
        <div>
            <h3 className={classes.heading}>QIE is able to handle <span className={classes.highlight}>10 times</span> more transactions than SWIFT</h3>
        </div>
    );
};

export default SectionHeading;