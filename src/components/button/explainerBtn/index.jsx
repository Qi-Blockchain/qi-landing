import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as PlayIcon} from "../../../assets/images/play-icon.svg";

const ExplainerBtn = ({link}) => {
    return (
        <button className={classes.button}>
            <a href={link} target={'_blank'}>
                Explainer Video
                <PlayIcon/>
            </a>
        </button>
    );
};

export default ExplainerBtn;