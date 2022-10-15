import React from 'react';
import SectionHeading from "./sectionHeading";
import classes from './styles.module.scss';
import rocksCenter from '../../../assets/images/rock-blockchain.png'
import rocksLeft from '../../../assets/images/rock-left.png'
import rocksRight from '../../../assets/images/rock-right.png'
import rocksBottom from '../../../assets/images/rock-bottom.png'

const BlockChainSection = () => {
    return (
        <div className={classes.containerPage}>
            <div className={classes.wrapper}>
                <SectionHeading/>
                <div>
                    <p className={classes.text}>Qi proposed to utilize blockchain technology not only for maintaining a decentralized payment network but also for storing computer code that can be used to power tamper-proof decentralized financial contracts and applications.
                    </p>
                    <p className={classes.text}>Blockchain helps in the verification and traceability of multi-step transactions needing verification and traceability. It can provide secure transactions, reduce compliance costs, and speed up data transfer processing. Blockchain technology can help contract management and audit the origin of a product.
                    </p>
                    <p className={classes.text}> If your goal is to provide the highest security level of data/transactions. A shared database is required. There is no trust between future network participants (employees, organizations, customers)</p>
                </div>
            </div>
            <div className={classes.rocksWrapper}>
                <div className={classes.rocksCenter}>
                    <img src={rocksCenter} alt="rocks blockchain center" className={'spinner'}/>
                </div>
                <div className={classes.rocksLeft}>
                    <img src={rocksLeft} alt="rocks blockchain center" className={'rotation'}/>
                </div>
                <div className={classes.rocksRight}>
                    <img src={rocksRight} alt="rocks blockchain center" className={'rotation'}/>
                </div>
                <div className={classes.rocksBottom}>
                    <img src={rocksBottom} alt="rocks blockchain center" className={'rotation'}/>
                </div>
            </div>
        </div>
    );
};

export default BlockChainSection;