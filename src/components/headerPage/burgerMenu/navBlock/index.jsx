import React from 'react';
import classes from './styles.module.scss';
import {Link} from "react-router-dom";
import {ROUTES} from "constant";

const NavBlock = () => {
    return (
        <div className={classes.wrapper}>
            <a href={'https://docs.qiblockchain.online/'} className={classes.link} rel="noopener noreferrer">
                Docs
            </a>
            <Link to={ROUTES.FAQ} className={classes.link} >
                FAQ
            </Link>
            <a href={'https://qiblockchain.online/index.php/terms-and-conditions'} className={classes.link} rel="noopener noreferrer">
                Terms of Service
            </a>
        </div>
    );
};

export default NavBlock;