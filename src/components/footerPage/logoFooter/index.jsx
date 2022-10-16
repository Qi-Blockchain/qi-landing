import React from 'react';
import {Link} from "react-router-dom";
import classes from "./styles.module.scss";
import {ReactComponent as LogoIcon} from "../../../assets/images/logo-icon-monochrome.svg";
import {ROUTES} from "../../../constant";

const LogoFooter = () => {
    return (
        <Link to={ROUTES.HOMEPAGE} className={classes.wrapper}>
            <div>{<LogoIcon/>}</div>
            <div className={classes.logoText}>Qi Blockchain</div>
        </Link>
    );
};

export default LogoFooter;