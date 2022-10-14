import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as FileIcon} from "../../../assets/images/file-cloud-icon.svg";

const PaperBtn = ({link}) => {
    return (
        <button className={classes.button}>
            <a href={link} target={'_blank'} rel="noopener noreferrer">
                White Paper
                <FileIcon/>
            </a>
        </button>
    );
};

export default PaperBtn;