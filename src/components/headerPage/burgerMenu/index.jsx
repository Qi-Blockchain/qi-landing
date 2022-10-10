import React, {useState} from 'react';
import classes from './styles.module.scss';
import {ReactComponent as BurgerClosedIcon} from "../../../assets/images/burger-closed-icon.svg";
import {ReactComponent as BurgerOpenedIcon} from "../../../assets/images/burger-opened-icon.svg";
import NavBlock from "./navBlock";
import MentionLinks from "../../mentionLinks";
import SocialLinks from "../../socialLinks";
import CopyrightBlock from "../../copyrightBlock";
import {useRecoilState} from "recoil";
import {burgerState} from "../../../store/burger";

const BurgerMenu = () => {
    const [isActive, setIsActive] = useRecoilState(burgerState);

    return (
        <div className={classes.wrapper}>
            <div onClick={() => setIsActive(!isActive)} className={classes.iconwrapper}>
                {isActive?
                    <BurgerOpenedIcon/>
                    :
                    <BurgerClosedIcon/>
                }
            </div>
            {isActive &&
                <div className={classes.menu}>
                    <NavBlock/>
                    <div className={classes.footer}>
                        <MentionLinks/>
                        <SocialLinks/>
                        <CopyrightBlock/>
                    </div>
                </div>
            }
        </div>
    );
};

export default BurgerMenu;