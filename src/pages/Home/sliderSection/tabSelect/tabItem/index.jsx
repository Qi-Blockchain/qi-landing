import React from 'react';
import classes from './styles.module.scss';

const TabItem = ({value, defaultChecked}) => {
    return (
        <div className={classes.wrapper}>
            <input
                type='radio'
                className={classes.input}
                id={'select-' + value}
                value={value}
                name='select-tab'
                defaultChecked={defaultChecked}
            />
            <label htmlFor={'select-' + value} className={classes.label}>
                {value}
            </label>
        </div>
    );
};

export default TabItem;