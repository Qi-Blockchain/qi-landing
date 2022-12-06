import React, {useEffect} from 'react';
import {FooterPage, HeaderPage} from "components";
import {useRecoilValue} from "recoil";
import {burgerState} from "../../store/burger";
import Content from "./content";
import classes from './styles.module.scss';

const Explore = () => {
    const burgerActive = useRecoilValue(burgerState);

    const checkBurgerStatus = () => {
        if (burgerActive) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto"
        }
    }
    useEffect(() => {
        checkBurgerStatus();
    }, [burgerActive]);


    return (
        <>
            <HeaderPage/>
            <div className={classes.wrapper}>
                <Content/>
            </div>
            <FooterPage/>
        </>
);
};

export default Explore;