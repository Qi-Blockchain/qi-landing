import React from 'react';
import {ExplainerBtn, PaperBtn} from "components";
import ScreenHeading from "./screenHeading";
import ScreenDescription from "./screenDescription";
import ButtonWrapper from "./buttonWrapper";
import classes from './styles.module.scss';
import useScreenWidth from "../../../../hook/useScreenWIdth";
import FloatingObjects from "../../../../components/floatingObjects";
import FeaturesMobile from "./featuresMobile";

const TextSide = () => {
    const screenWidth = useScreenWidth();

    return (
        <div className={classes.wrapper}>
            {screenWidth < 1025?
                <FloatingObjects/>
                :
                <></>
            }
            <ScreenHeading/>
            <ScreenDescription/>
            <ButtonWrapper>
                <ExplainerBtn/>
                <PaperBtn/>
            </ButtonWrapper>
            {screenWidth < 1025?
                <FeaturesMobile/>
                :
                <></>
            }
        </div>
    );
};

export default TextSide;