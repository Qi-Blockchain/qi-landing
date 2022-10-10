import React from 'react';
import classes from './style.module.scss';
import SelectOption from "./selectOption";

const Select = ({id, options}) => {
    return (
        <div className={classes.wrapper}>
            {options.map((elem, index) => (
                <SelectOption key={'key_' + index} id={id} value={elem}/>
            ))}
        </div>
    );
};

export default Select;