import React from 'react';
import classes from './styles.module.scss';

const PageWrapper = ({children}) => {

    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
};

export default PageWrapper;