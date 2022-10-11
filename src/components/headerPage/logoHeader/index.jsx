import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as LogoIcon} from "assets/images/logo.svg";
import {ReactComponent as LogoText} from "assets/images/logo-text.svg";

const LogoHeader = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.logoIcon}>{<LogoIcon/>}</div>
            <div className={classes.logoText}>QiBlockchain</div>
        </div>
    );
};

export default LogoHeader;