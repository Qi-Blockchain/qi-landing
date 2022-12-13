import React from 'react';
import {ReactComponent as Coin} from "assets/images/coin-tag.svg";
import {ReactComponent as Arrow} from "assets/images/arrow-link.svg";
import classes from './styles.module.scss';

const Card = ({icon, heading, text, tag, newTag, symbol, appLink, symbolLink, soonTag}) => {

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
                        {newTag && <div className={classes.new}>{newTag}</div>}
                        {soonTag && <div className={classes.soon}>{soonTag}</div>}
                        {symbol && <a href={symbolLink} target='_blank' rel='noreferrer' className={classes.aav}>
                            <Coin/>
                            <span>{symbol}</span>
                        </a>}
                        {tag && <div className={classes.tag}>{tag}</div>}
                    </div>
                </div>
                <p className={classes.text}>{text}</p>
            </div>
            {appLink &&
                <a
                    href={appLink}
                    target='_blank'
                    rel='noreferrer'
                    className={classes.link}
                >
                    Open in new tab
                    <Arrow/>
                </a>
            }
        </div>
    );
};

export default Card;