import React from 'react';
import FloatingText from "./floatingText";
import FloatingObjects from "../../../../components/floatingObjects";
import classes from './styles.module.scss';

const IllustrationSide = () => {
    return (
        <div className={classes.wrapper}>
            <FloatingText/>
            {/*<FloatingObjects/>*/}
        </div>
    );
};

export default IllustrationSide;