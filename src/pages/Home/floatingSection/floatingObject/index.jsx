import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as CaretIcon} from "../../../../assets/images/caret-right-icon.svg";

const FloatingObject = ({text, link}) => {
    return (
        <div className={classes.wrapper}>
            <a href={link} target={'_blank'} rel="noopener noreferrer">
                {text}
                <CaretIcon/>
            </a>
        </div>
    );
};

export default FloatingObject;