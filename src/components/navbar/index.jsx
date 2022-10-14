import React from 'react';
import NavItem from "./navItem";
import classes from './styles.module.scss';
import {ROUTES} from "constant";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={classes.wrapper}>
            <NavItem text={'Docs'} link={'https://docs.qiblockchain.online/'}/>
            <Link to={ROUTES.FAQ} className={classes.link} >
                FAQ
            </Link>
            <NavItem text={'Terms of Service'} link={'https://qiblockchain.online/index.php/terms-and-conditions'}/>
        </nav>
    );
};

export default Navbar;