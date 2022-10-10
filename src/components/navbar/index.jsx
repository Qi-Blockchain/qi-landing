import React from 'react';
import NavItem from "./navItem";
import classes from './styles.module.scss';

const Navbar = () => {
    const navList = [
        {text: 'Docs'},
        {text: 'FAQ'},
        {text: 'Terms of Service'}
    ];

    return (
        <nav className={classes.wrapper}>
            {navList.map((item, index) => (
                <NavItem key={'key_' + index} text={item.text}/>
            ))}
        </nav>
    );
};

export default Navbar;