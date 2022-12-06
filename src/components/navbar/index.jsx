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
            <Link to={ROUTES.TERMS} className={classes.link} >
                Terms of Service
            </Link>
            <Link to={ROUTES.EXPLORE_DAPPS} className={classes.link} >
                Explore Dapps
            </Link>
        </nav>
    );
};

export default Navbar;