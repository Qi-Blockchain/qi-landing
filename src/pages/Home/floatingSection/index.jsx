import React from 'react';
import classes from './styles.module.scss';
import FloatingObject from "./floatingObject";

const FloatingSection = () => {
    return (
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                <FloatingObject text={'Qi Blockchain Explorer'} link={'https://mainnet.qiblockchain.online/explorer/explorer'}/>
                <FloatingObject text={'Developer Resources'} link={'https://docs.qiblockchain.online/'}/>
                <FloatingObject text={'Qi Blockchain Testnet'} link={'https://testnet.qiblockchain.online/explorer/explorer'}/>
            </section>
        </div>
    );
};

export default FloatingSection;