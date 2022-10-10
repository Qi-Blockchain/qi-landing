import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as CaretIcon} from "../../../../assets/images/caret-right-icon.svg";

const FloatingObject = ({text}) => {
    return (
        <div className={classes.wrapper}>
            {text}
            <CaretIcon/>
        </div>
    );
};

export default FloatingObject;