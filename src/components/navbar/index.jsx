import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "constant";
import {ReactComponent as Icon} from "assets/images/explore-icon.svg";
import NavItem from "./navItem";
import classes from './styles.module.scss';

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
            <div className={classes.linkEcoWrapper}>
                <Icon />
                <Link to={ROUTES.EXPLORE_DAPPS} className={classes.linkEco} >
                    Ecosystem
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
