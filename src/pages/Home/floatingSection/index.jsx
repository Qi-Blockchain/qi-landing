import React from 'react';
import useScreenWidth from "../../../hook/useScreenWIdth";
import FloatingBlock from "./floatingBlock";
import FloatingMobile from "./floatingMobile";

const FloatingSection = () => {
    const screen = useScreenWidth();

    return (
        <>
            {screen > 1025 ?
                <FloatingBlock/>
                :
                <FloatingMobile/>
            }
        </>
    );
};

export default FloatingSection;