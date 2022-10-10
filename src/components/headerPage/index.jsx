import React from 'react';
import LogoHeader from "./logoHeader";
import Navbar from "../navbar";
import Socialbar from "../socialbar";
import classes from './styles.module.scss';
import useScreenWidth from "../../hook/useScreenWIdth";
import BurgerMenu from "./burgerMenu";

const HeaderPage = () => {
    const screenWidth = useScreenWidth();

    return (
        <header className={classes.wrapper}>
            <div className={classes.container}>
                <LogoHeader/>
            </div>
            <div className={classes.container}>
                <Navbar/>
            </div>
            <div className={classes.container}>
                <Socialbar/>
            </div>
            {screenWidth < 1025 ?
                <BurgerMenu/>
                :
                <></>
            }
        </header>
    );
};

export default HeaderPage;