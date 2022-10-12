import React from 'react';
import classes from './styles.module.scss';

const SelectOption = ({id, value, checked, label, setValue}) => {
    return (
        <div className={classes.wrapper}>
            <input
                type='radio'
                id={id + '-' + value}
                name={id}
                value={value}
                className={classes.input}
                defaultChecked={label === checked}
                onChange={() => setValue(value)}
            />
            <label htmlFor={id + '-' + value} className={classes.label}>
                {label}
            </label>
        </div>
    );
};

export default SelectOption;