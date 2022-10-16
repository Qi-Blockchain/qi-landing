import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as LogoIcon} from "assets/images/logo.svg";
import {ReactComponent as LogoText} from "assets/images/logo-text.svg";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../constant";

const LogoHeader = () => {
    return (
        <Link to={ROUTES.HOMEPAGE} className={classes.wrapper}>
            <div className={classes.logoIcon}>{<LogoIcon/>}</div>
            <div className={classes.logoText}>Qi Blockchain</div>
        </Link>
    );
};

export default LogoHeader;