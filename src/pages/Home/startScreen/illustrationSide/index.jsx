import React, {useEffect, useRef} from 'react';
import FloatingText from "./floatingText";
import FloatingObjects from "./floatingObjects";
import classes from './styles.module.scss';
import useScreenWidth from "../../../../hook/useScreenWIdth";

const IllustrationSide = () => {
    const screen = useScreenWidth();

    return (
        <div className={classes.wrapper}>
            <FloatingText/>
            <FloatingObjects/>
        </div>
    );
};

export default IllustrationSide;