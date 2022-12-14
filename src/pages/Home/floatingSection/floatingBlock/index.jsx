import React, {useEffect, useRef} from 'react';
import classes from './styles.module.scss';
import FloatingObject from "../../floatingObject";
import Parallax from "parallax-js";
import useScreenWidth from "../../../../hook/useScreenWIdth";

const FloatingBlock = () => {
    const screen = useScreenWidth();
    const ref = useRef();

    const setParallax = () => {
        if (screen > 1025) {
            new Parallax(ref.current);
        }
    }

    useEffect(() => {
        setParallax();
    }, [screen]);

    return (
        <div className={classes.containerPage}>
            <section ref={ref} id={'scene-second'} className={classes.wrapper}>
                <FloatingObject text={'Qi Blockchain Explorer'} link={'https://mainnet.qiblockchain.online'} icon={'rocket'} depth={0.3}/>
                <FloatingObject text={'Developer Resources'} link={'https://docs.qiblockchain.online/'} icon={'robot'} depth={0.6}/>
                <FloatingObject text={'Qi Blockchain Testnet'} link={'https://testnet.qiblockchain.online'} icon={'exchange'} depth={1}/>
            </section>
        </div>
    );
};

export default FloatingBlock;