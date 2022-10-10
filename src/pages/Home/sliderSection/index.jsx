import React from 'react';
import TabSelect from "./tabSelect";
import SliderBlock from "./sliderBlock";
import classes from './styles.module.scss';
import useScreenWidth from "../../../hook/useScreenWIdth";
import SliderBlockMobile from "./sliderBlockMobile";

const SliderSection = () => {
    const screen = useScreenWidth()
    return (
        <section className={classes.wrapper}>
            <TabSelect/>
            {screen > 1025 ?
                <SliderBlock/>
                :
                <SliderBlockMobile/>
            }
        </section>
    );
};

export default SliderSection;