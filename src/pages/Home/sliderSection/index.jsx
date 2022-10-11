import React from 'react';
import TabSelect from "./tabSelect";
import SliderBlock from "./sliderBlock";
import classes from './styles.module.scss';
import useScreenWidth from "../../../hook/useScreenWIdth";
import SliderBlockMobile from "./sliderBlockMobile";
import {useRecoilValue} from "recoil";
import {newsTabState} from "../../../store/newTab";
import SliderVideoBlock from "./sliderVideoBlock";
import SliderVideoBlockMobile from "./sliderVideoBlockMobile";

const SliderSection = () => {
    const screen = useScreenWidth();
    const activeTab = useRecoilValue(newsTabState);

    return (
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                <TabSelect/>
                {screen > 1025 ?
                    activeTab === 'news' ?
                        <SliderBlock/>
                        :
                        <SliderVideoBlock/>
                    :
                    activeTab === 'news' ?
                        <SliderBlockMobile/>
                        :
                        <SliderVideoBlockMobile/>
                }
            </section>
        </div>
    );
};

export default SliderSection;