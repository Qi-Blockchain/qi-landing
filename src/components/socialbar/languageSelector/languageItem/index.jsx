import React from 'react';
import classes from './styles.module.scss';

const LanguageItem = ({value, icon}) => {
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
                {icon}
            </label>
        </div>
    );
};

export default LanguageItem;