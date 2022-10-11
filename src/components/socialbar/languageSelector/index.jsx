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
            icon: <USFlag/>,
            link: 'https://t.me/HovRonQiblockchain'
        },
        {
            value: 'cn',
            icon: <CNFlag/>,
            link: 'https://t.me/Qiblockchain'
        },
        {
            value: 'ru',
            icon: <RUFlag/>,
            link: 'https://t.me/qie_russia'
        }
    ];
    return (
        <div className={classes.wrapper}>
            {langOptions.map((option, index) => (
                <LanguageItem key={'key_' + index} value={option.value} icon={option.icon} link={option.link}/>
            ))}
        </div>
    );
};

export default LanguageSelector;