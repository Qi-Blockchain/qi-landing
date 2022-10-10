import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import classes from './styles.module.scss';

const IconsItem = ({icon, title, value, percent}) => {
    return (
        <div>
            <div className={classes.iconWrapper}>
                <div>{icon}</div>
                <div className={classes.title}>{title}</div>
            </div>
            <div className={classes.value}>{value}</div>
            <ProgressBar
                completed={percent}
                isLabelVisible={false}
                borderRadius="4px"
                bgColor="#FF136D"
                baseBgColor="rgba(255, 19, 109, 0.15)"
                height="4px"
                width="60px"
            />
        </div>
    );
};

export default IconsItem;