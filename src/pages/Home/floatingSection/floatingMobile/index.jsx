import React from 'react';
import classes from './styles.module.scss';
import FloatingObject from "../../floatingObject";

const FloatingMobile = () => {

    return (
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                <FloatingObject text={'Qi Blockchain Explorer'} link={'https://mainnet.qiblockchain.online'} icon={'rocket'} depth={0.3}/>
                <FloatingObject text={'Developer Resources'} link={'https://docs.qiblockchain.online/'} icon={'robot'} depth={0.6}/>
                <FloatingObject text={'QIE Mobile Wallet'} link={'https://qiewallet.qiblockchain.online/'} icon={'exchange'} depth={1}/>
            </section>
        </div>
    );
};

export default FloatingMobile;
