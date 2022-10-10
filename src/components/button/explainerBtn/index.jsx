import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as PlayIcon} from "../../../assets/images/play-icon.svg";

const ExplainerBtn = () => {
    return (
        <button className={classes.button}>
            Explainer Video
            <PlayIcon/>
        </button>
    );
};

export default ExplainerBtn;