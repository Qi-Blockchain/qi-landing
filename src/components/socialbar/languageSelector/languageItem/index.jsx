import React from 'react';
import classes from './styles.module.scss';

const LanguageItem = ({value, icon, link}) => {
    return (
        <div>
            <input
                id={'lang-' + value}
                value={value}
                name='lang'
                type='radio'
                className={classes.input}
            />
            <label htmlFor={'lang-' + value} className={classes.label}>
                <a href={link} target={'_blank'}>
                    {icon}
                </a>
            </label>
        </div>
    );
};

export default LanguageItem;