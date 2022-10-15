import React from 'react';
import classes from './styles.module.scss';

const TextBlurBg = ({text, secondLine, depth}) => {
    return (
        <div className={classes.wrapper} data-depth={depth}>
            <p className={classes.text}>{text}</p>
            {secondLine &&
                <p className={classes.text}>{secondLine}</p>
            }
        </div>
    );
};

export default TextBlurBg;