import React from 'react';
import LanguageItem from "./languageItem";
import classes from './styles.module.scss';
import {ReactComponent as USFlag} from "../../../assets/images/us-icon.svg";
import {ReactComponent as CNFlag} from "../../../assets/images/cn-icon.svg";
import {ReactComponent as RUFlag} from "../../../assets/images/ru-icon.svg";

const LanguageSelector = () => {
    const langOptions = [
        {
            value: 'us',
            icon: <USFlag/>
        },
        {
            value: 'cn',
            icon: <CNFlag/>
        },
        {
            value: 'ru',
            icon: <RUFlag/>
        }
    ];
    return (
        <div className={classes.wrapper}>
            {langOptions.map((option, index) => (
                <LanguageItem key={'key_' + index} value={option.value} icon={option.icon}/>
            ))}
        </div>
    );
};

export default LanguageSelector;