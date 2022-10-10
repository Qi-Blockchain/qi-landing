import React from 'react';
import classes from "./styles.module.scss";
import {ReactComponent as LogoIcon} from "../../../assets/images/logo-icon-monochrome.svg";
import {ReactComponent as LogoText} from "../../../assets/images/logo-text-text-xs.svg";

const LogoFooter = () => {
    return (
        <div className={classes.wrapper}>
            <div>{<LogoIcon/>}</div>
            <div>{<LogoText/>}</div>
        </div>
    );
};

export default LogoFooter;