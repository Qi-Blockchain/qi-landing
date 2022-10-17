import React, {useEffect, useRef} from 'react';
import classes from './styles.module.scss';
import rockOne from '../../../../../assets/images/rock-1-sc.png';
import rockTwo from '../../../../../assets/images/rock-2-sc.png';
import rockThree from '../../../../../assets/images/rock-3-sc.png';
import Parallax from "parallax-js";

const FloatingObjects = () => {
    const ref = useRef();


    useEffect(() => {
        new Parallax(ref.current)
    }, []);

    return (
        <div className={classes.wrapper}>
            <div ref={ref} id={'scene-header'} className={classes.contentWrapper}>
                <div data-depth={0.3} className={classes.rockOneWrapper}>
                    <div className={classes.rockOne}>
                        <img src={rockOne} alt="rock one"/>
                    </div>
                </div>
                <div data-depth={0.6} className={classes.rockTwoWrapper}>
                    <div className={classes.rockTwo}>
                        <img src={rockTwo} alt="rock two"/>
                    </div>
                </div>
                <div data-depth={0.9} className={classes.rockThreeWrapper}>
                    <div className={classes.rockThree}>
                        <img src={rockThree} alt="rock three"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingObjects;