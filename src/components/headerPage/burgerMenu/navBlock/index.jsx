import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "constant";
import {ReactComponent as Icon} from "assets/images/explore-icon.svg";
import classes from './styles.module.scss';


const NavBlock = ({stateChanger}) => {
    return (
        <div className={classes.wrapper}>
            <a href={'https://docs.qiblockchain.online/'} className={classes.link} rel="noopener noreferrer" target="_blank">
                Docs
            </a>
            <Link to={ROUTES.FAQ} className={classes.link} onClick={() => stateChanger()}>
                FAQ
            </Link>
            <Link to={ROUTES.TERMS} className={classes.link} onClick={() => stateChanger()}>
                Terms of Service
            </Link>
            <div className={classes.linkEcoWrapper}>
                <Icon />
                <Link to={ROUTES.EXPLORE_DAPPS} className={classes.linkEco} onClick={() => stateChanger()}>
                    Ecosystem
                </Link>
            </div>
        </div>
    );
};

export default NavBlock;
