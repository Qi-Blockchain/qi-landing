import React from 'react';
import {ReactComponent as Coin} from "assets/images/coin-tag.svg";
import classes from './styles.module.scss';

const Card = ({icon, heading, text, tag, newTag, aav}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.iconFlex}>
                <img src={icon} alt="card icon"/>
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.headingWrapper}>
                    <div className={classes.headingWithIcon}>
                        <div className={classes.iconGrid}>
                            <img src={icon} alt="card icon"/>
                        </div>
                        <h5 className={classes.heading}>{heading}</h5>
                    </div>
                    <div className={classes.tagWrapper}>
                        {newTag && <div className={classes.new}>New</div>}
                        {aav && <div className={classes.aav}>
                            <Coin/>
                            <span>AAV</span>
                        </div>}
                        {tag && <div className={classes.tag}>{tag}</div>}
                    </div>
                </div>
                <p className={classes.text}>{text}</p>
            </div>
        </div>
    );
};

export default Card;