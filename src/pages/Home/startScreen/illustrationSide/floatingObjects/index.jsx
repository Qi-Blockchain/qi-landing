import React from 'react';
import classes from './styles.module.scss';
import rockOne from '../../../../../assets/images/rock-1-sc.png';
import rockTwo from '../../../../../assets/images/rock-2-sc.png';
import rockThree from '../../../../../assets/images/rock-3-sc.png';

const FloatingObjects = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.contentWrapper}>
                <div className={classes.rockOneWrapper}>
                    <div className={classes.rockOne}>
                        <img src={rockOne} alt="rock one"/>
                    </div>
                </div>
                <div className={classes.rockTwoWrapper}>
                    <div className={classes.rockTwo}>
                        <img src={rockTwo} alt="rock two"/>
                    </div>
                </div>
                <div className={classes.rockThreeWrapper}>
                    <div className={classes.rockThree}>
                        <img src={rockThree} alt="rock three"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingObjects;