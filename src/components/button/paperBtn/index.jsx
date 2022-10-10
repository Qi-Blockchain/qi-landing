import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as FileIcon} from "../../../assets/images/file-cloud-icon.svg";

const PaperBtn = () => {
    return (
        <button className={classes.button}>
            White Paper
            <FileIcon/>
        </button>
    );
};

export default PaperBtn;