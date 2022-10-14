import React from 'react';
import {BackBtn} from "components";
import Accordion from "./accordion";
import classes from './styles.module.scss';
import PageHeading from "../pageHeading";

const Content = () => {
    return (
        <div className={classes.wrapper}>
            <BackBtn/>
            <PageHeading/>
            <Accordion/>
        </div>
    );
};

export default Content;