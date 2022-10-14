import React from 'react';
import classes from './styles.module.scss';

const Heading = () => {
    return (
        <div className={classes.text}>
            Data from
            <span> </span>
            <a className={classes.link} href={'https://coinmarketcap.com/currencies/qi-blockchain/'} target={'_blank'} rel="noopener noreferrer">
                 coinmarketcap.com
            </a>
        </div>
    );
};

export default Heading;