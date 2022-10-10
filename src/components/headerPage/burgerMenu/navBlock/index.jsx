import React from 'react';
import classes from './styles.module.scss';

const NavBlock = () => {
    return (
        <div className={classes.wrapper}>
            <a href='#' className={classes.link}>
                Docs
            </a>
            <a href='#' className={classes.link}>
                FAQ
            </a>
            <a href='#' className={classes.link}>
                Terms of Service
            </a>
        </div>
    );
};

export default NavBlock;