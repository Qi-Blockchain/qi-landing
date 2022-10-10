import React, {useEffect} from 'react';
import {FooterPage, HeaderPage, PageWrapper} from "components";
import StartScreen from "./startScreen";
import classes from './styles.module.scss';
import {useRecoilValue} from "recoil";
import {burgerState} from "../../store/burger";
import LiveChartSection from "./liveChartSection";
import BlockChainSection from "./blockChainSection";
import CompareSection from "./compareSection";
import SliderSection from "./sliderSection";
import TableSection from "./tableSection";
import FloatingSection from "./floatingSection";

const Home = () => {
    const burgerActive = useRecoilValue(burgerState);

    const checkBurgerStatus = () => {
        if (burgerActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }
    useEffect(() => {
        checkBurgerStatus();
    }, [burgerActive]);

    return (
        <>
            <div className={classes.startScreenWrapper}>
                <HeaderPage/>
                <StartScreen/>
            </div>
            <LiveChartSection/>
            <div className={classes.floatingSectionWrapper}>
                <FloatingSection/>
            </div>
            <TableSection/>
            <div className={classes.compareSectionWrapper}>
                <CompareSection/>
            </div>
            <BlockChainSection/>
            <div className={classes.sliderSectionWrapper}>
                <SliderSection/>
            </div>
            <FooterPage/>
        </>
    );
};

export default Home;