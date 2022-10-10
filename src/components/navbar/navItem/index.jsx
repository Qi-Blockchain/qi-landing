import React from 'react';
import classes from './styles.module.scss';

const NavItem = ({text}) => {
    return (
        <a href='#' className={classes.link}>
            {text}
        </a>
    );
};

export default NavItem;