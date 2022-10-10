import React from 'react';
import SectionHeading from "./sectionHeading";
import {ExplainerBtn} from "components";
import classes from './styles.module.scss';
import useScreenWIdth from "../../../../hook/useScreenWIdth";


const TextBlock = () => {
    const screen = useScreenWIdth();
    return (
        <div className={classes.wrapper}>
            <SectionHeading/>
            <p className={classes.text}>Qi is a decentralised POW (Proof of work) blockchain with an application native currency which is leveraging functionality of creating fungible and non-fungible assets using Remote Procedure call (RPC) methods. </p>
            <p className={classes.text}>Qi blockchain with QIE cryptocurrency is designed for Finance categorised with low transaction fees and realtime execution</p>
            {screen > 500 ?
                <div className={classes.btnWrapper}>
                    <ExplainerBtn link={'https://www.youtube.com/watch?v=1x4-YS-PzYA'}/>
                </div>
            :
                <ExplainerBtn link={'https://www.youtube.com/watch?v=1x4-YS-PzYA'}/>
            }


        </div>
    );
};

export default TextBlock;