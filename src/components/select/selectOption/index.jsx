import React from 'react';
import classes from './styles.module.scss';

const SelectOption = ({id, value}) => {
    return (
        <div className={classes.wrapper}>
            <input
                type='radio'
                id={id + '-' +value}
                name={id}
                value={value}
                className={classes.input}
            />
            <label htmlFor={id + '-' + value} className={classes.label}>
                {value}
            </label>
        </div>
    );
};

export default SelectOption;