import React from 'react';
import classes from './style.module.scss';
import SelectOption from "./selectOption";

const Select = ({id, options, value, defaultChecked, setState}) => {
    return (
        <div className={classes.wrapper}>
            {options.map((elem, index) => (
                <SelectOption key={'key_' + index} id={id} label={elem} value={value[index]} checked={defaultChecked} setValue={setState}/>
            ))}
        </div>
    );
};

export default Select;