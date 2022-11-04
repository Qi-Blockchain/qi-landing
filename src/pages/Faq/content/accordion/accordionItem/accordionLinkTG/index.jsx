import React, {useState} from 'react';
import classNames from "classnames";
import classes from '../styles.module.scss';
import {ReactComponent as CaretRight} from "../../../../../../assets/images/caret-right-icon.svg";
import {ReactComponent as CaretDown} from "../../../../../../assets/images/caret-down-icon.svg";
import {LINKS} from "../../../../../../constant";

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
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Also:
            </p>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Reddit:
            </p>
            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={LINKS.REDDIT} target={'_blank'} rel="noopener noreferrer">
                {LINKS.REDDIT}
            </a>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Instagram:
            </p>
            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={LINKS.INSTAGRAM} target={'_blank'} rel="noopener noreferrer">
                {LINKS.INSTAGRAM}
            </a>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Facebook:
            </p>
            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={LINKS.FACEBOOK} target={'_blank'} rel="noopener noreferrer">
                {LINKS.FACEBOOK}
            </a>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Twitter:
            </p>
            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={LINKS.TWITTER} target={'_blank'} rel="noopener noreferrer">
                {LINKS.TWITTER}
            </a>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Github:
            </p>

            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={LINKS.GITHUB} target={'_blank'} rel="noopener noreferrer">
                {LINKS.GITHUB}
            </a>

            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Discord:
            </p>

            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={LINKS.DISCORD} target={'_blank'} rel="noopener noreferrer">
                {LINKS.DISCORD}
            </a>
        </div>
    );
};

export default AccordionLink;