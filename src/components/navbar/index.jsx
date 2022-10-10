import React from 'react';
import NavItem from "./navItem";
import classes from './styles.module.scss';

const Navbar = () => {
    const navList = [
        {text: 'Docs', link: 'https://docs.qiblockchain.online/'},
        {text: 'FAQ', link: 'https://qiblockchain.online/index.php/faq'},
        {text: 'Terms of Service', link: 'https://qiblockchain.online/index.php/terms-and-conditions'}
    ];

    return (
        <nav className={classes.wrapper}>
            {navList.map((item, index) => (
                <NavItem key={'key_' + index} text={item.text} link={item.link}/>
            ))}
        </nav>
    );
};

export default Navbar;