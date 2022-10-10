import React from 'react';
import LanguageSelector from "./languageSelector";
import SocialLinks from "../socialLinks";
import classes from './styles.module.scss';

const Socialbar = () => {
    return (
        <div className={classes.wrapper}>
            <SocialLinks/>
            <LanguageSelector/>
        </div>
    );
};

export default Socialbar;