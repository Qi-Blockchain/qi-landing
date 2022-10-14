import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as CaretLeft} from "../../../assets/images/caret-left-icon.svg";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "constant";

const BackBtn = () => {
    const navigate = useNavigate();

    return (
        <button className={classes.btn} onClick={() => navigate(ROUTES.HOMEPAGE)}>
            <CaretLeft/>
            Back
        </button>
    );
};

export default BackBtn;