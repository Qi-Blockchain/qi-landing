import React from 'react';
import classes from './styles.module.scss';
import img from '../../assets/images/floating-objects.png';

const FloatingObjects = () => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={img} alt='floating objects'/>
        </div>
    );
};

export default FloatingObjects;