import React from 'react';
import {useRecoilState} from "recoil";
import NavBlock from "./navBlock";
import MentionLinks from "../../mentionLinks";
import CopyrightBlock from "../../copyrightBlock";
import {burgerState} from "../../../store/burger";
import Socialbar from "../../socialbar";
import classes from './styles.module.scss';
import {ReactComponent as BurgerClosedIcon} from "../../../assets/images/burger-closed-icon.svg";
import {ReactComponent as BurgerOpenedIcon} from "../../../assets/images/burger-opened-icon.svg";

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
                    <NavBlock stateChanger={setIsActive}/>
                    <div className={classes.footer}>
                        <MentionLinks/>
                        <Socialbar/>
                        <CopyrightBlock/>
                    </div>
                </div>
            }
        </div>
    );
};

export default BurgerMenu;