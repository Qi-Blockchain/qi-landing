import React, {useState} from 'react';
import classes from '../styles.module.scss';
import {ReactComponent as CaretRight} from "../../../../../../assets/images/caret-right-icon.svg";
import {ReactComponent as CaretDown} from "../../../../../../assets/images/caret-down-icon.svg";
import classNames from "classnames";

const AccordionLink = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleVisibility = () => setIsActive(!isActive);

    const buttonClasses = () => classNames({
        [classes.button]: true,
        [classes.buttonActive] : isActive
    });

    const textClasses = () => classNames({
        [classes.content]: true,
        [classes.contentActive] : isActive
    });

    const linkClasses = () => classNames({
        [classes.link]: true,
        [classes.linkActive] : isActive
    });

    const breakLineClasses = () => classNames({
        [classes.breakLine]: true,
        [classes.breakLineActive] : isActive
    });

    return (
        <div>
            <button className={buttonClasses()} onClick={handleToggleVisibility}>
                <div className={classes.headingWrapper}>
                    Are there other social media groups other than website links?
                </div>
                <div>
                    {isActive ?
                        <CaretDown/>
                        :
                        <CaretRight/>
                    }
                </div>
            </button>
            <p className={textClasses()}>
                Yes, you can join the following telegram groups if you have any more questions:
            </p>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Chinese:
            </p>
            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={'https://t.me/Qiblockchain'} target={'_blank'} rel="noopener noreferrer">
                https://t.me/Qiblockchain
            </a>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Russian:
            </p>
            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={'https://t.me/qie_russia'} target={'_blank'} rel="noopener noreferrer">
                https://t.me/qie_russia
            </a>
        </div>
    );
};

export default AccordionLink;