import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../constant";
import classes from './styles.module.scss';

const BtnGradient = () => {
    return (
        <button className={classes.button}>
            <Link to={ROUTES.EXPLORE_DAPPS}>
                <span className={classes.text}>Explore Dapps</span>
            </Link>
        </button>
    );
};

export default BtnGradient;