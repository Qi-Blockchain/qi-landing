import React from 'react';
import classes from './styles.module.scss';

const NavItem = ({text, link}) => {
    return (
        <a href={link} className={classes.link} target={'_blank'} rel="noopener noreferrer">
            {text}
        </a>
    );
};

export default NavItem;