import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as CaretIcon} from "../../../assets/images/caret-right-icon.svg";
import {ReactComponent as RockeIcon} from "../../../assets/images/rocket.svg";
import {ReactComponent as RobotIcon} from "../../../assets/images/robot.svg";
import {ReactComponent as SwapIcon} from "../../../assets/images/swap.svg";
import classNames from "classnames";
import useScreenWidth from "../../../hook/useScreenWIdth";

const FloatingObject = ({text, link, icon, depth}) => {
    const screen = useScreenWidth();

    const wrapperClasses = () => classNames({
        [classes.wrapper]: true
    })

    return (
        <div className={wrapperClasses()} data-depth={depth}>
            <a href={link} target={'_blank'} rel="noopener noreferrer">
                {text}
                <CaretIcon/>
            </a>
            {icon === 'rocket' &&
                <div className={classes.rocket}>
                    <RockeIcon/>
                </div>
            }
            {icon === 'robot' &&
                <div className={classes.robot}>
                    <RobotIcon/>
                </div>
            }
            {icon === 'exchange' &&
                <div className={classes.exchange}>
                    <SwapIcon/>
                </div>
            }
        </div>
    );
};

export default FloatingObject;