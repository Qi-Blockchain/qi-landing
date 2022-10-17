import React from 'react';
import classes from './styles.module.scss';
import {Link} from "react-router-dom";
import {ROUTES} from "constant";

const NavBlock = () => {
    return (
        <div className={classes.wrapper}>
            <a href={'https://docs.qiblockchain.online/'} className={classes.link} rel="noopener noreferrer" target="_blank">
                Docs
            </a>
            <Link to={ROUTES.FAQ} className={classes.link} >
                FAQ
            </Link>
            <Link to={ROUTES.TERMS} className={classes.link} >
                Terms of Service
            </Link>
        </div>
    );
};

export default NavBlock;