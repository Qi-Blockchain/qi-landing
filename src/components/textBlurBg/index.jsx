import React from 'react';
import classes from './styles.module.scss';

const TextBlurBg = ({text, secondLine}) => {
    return (
        <div className={classes.wrapper}>
            <p className={classes.text}>{text}</p>
            {secondLine &&
                <p className={classes.text}>{secondLine}</p>
            }
        </div>
    );
};

export default TextBlurBg;