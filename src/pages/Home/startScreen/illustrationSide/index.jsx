import React, {useEffect, useRef} from 'react';
import FloatingText from "./floatingText";
import FloatingObjects from "./floatingObjects";
import classes from './styles.module.scss';
const IllustrationSide = () => {

    return (
        <div className={classes.wrapper}>
            <FloatingText/>
            <FloatingObjects/>
        </div>
    );
};

export default IllustrationSide;