import React from 'react';
import classes from "./styles.module.scss";
import {ReactComponent as LogoIcon} from "../../../assets/images/logo-icon-monochrome.svg";

const LogoFooter = () => {
    return (
        <div className={classes.wrapper}>
            <div>{<LogoIcon/>}</div>
            <div className={classes.logoText}>Qi Blockchain</div>
        </div>
    );
};

export default LogoFooter;