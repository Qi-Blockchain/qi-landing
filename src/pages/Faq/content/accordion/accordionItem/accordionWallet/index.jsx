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

    const headingClasses = () => classNames({
        [classes.heading]: true,
        [classes.headingActive] : isActive
    });

    return (
        <div>
            <button className={buttonClasses()} onClick={handleToggleVisibility}>
                <div className={classes.headingWrapper}>
                    How to open QIE wallet?
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
                Other than exchanges that QIE is listed on you can follow these steps:
            </p>
            <p className={textClasses()}>
                Connect with Metamask on QI network, you can go to Networks in Settings and can add following parameters to add network
            </p>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={headingClasses()}>Mainnet Configuration Parameters:</p>
            <br className={breakLineClasses()}/>
            <p className={headingClasses()}>Network Name:</p>
            <p className={textClasses()}>
                QI Blockchain - Mainnet
            </p>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={headingClasses()}>New RPC URL:</p>
            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={'https://rpc-main1.qiblockchain.online/'} target={'_blank'} rel="noopener noreferrer">
                https://rpc-main1.qiblockchain.online/
            </a>
            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={'https://rpc-main2.qiblockchain.online/'} target={'_blank'} rel="noopener noreferrer">
                https://rpc-main2.qiblockchain.online/
            </a>
            <br className={breakLineClasses()}/>
            <a className={linkClasses()} href={'https://rpc-main3.qiblockchain.online/'} target={'_blank'} rel="noopener noreferrer">
                https://rpc-main3.qiblockchain.online/
            </a>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Any one of these will work
            </p>
            <p className={headingClasses()}>ChainID:&nbsp;</p>
            <p className={textClasses()}>9731</p>
            <br className={breakLineClasses()}/>
            <p className={headingClasses()}>Symbol:&nbsp;</p>
            <p className={textClasses()}>QIE</p>
            <br className={breakLineClasses()}/>
            <p className={headingClasses()}>Block Explorer URL:&nbsp;</p>
            <a className={linkClasses()} href={'https://mainnet.qiblockchain.online/explorer/explorer'} target={'_blank'} rel="noopener noreferrer">
                https://mainnet.qiblockchain.online/explorer/explorer
            </a>
        </div>
    );
};

export default AccordionLink;