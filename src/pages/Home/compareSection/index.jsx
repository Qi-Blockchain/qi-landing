import React from 'react';
import classes from './styles.module.scss';
import SectionHeading from "./sectionHeading";
import IconsBlock from "./iconsBlock";

const CompareSection = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapperText}>
                <SectionHeading/>
                <IconsBlock/>
                <p className={classes.text}>Qi enables the deployment of smart contracts and decentralized applications (dApps) to be built and run without any downtime, fraud, control, or interference from a third party.  Decentralized applications—also known as "dApps" or "dapps"—are digital applications that run on a blockchain network of computers instead of relying on a single computer.  Benefits of dApps include the safeguarding of user privacy, the lack of censorship, and the flexibility of development.  The use of blockchain enables a dApp to process data through distributed networks and to execute transactions.  Qi can be used for a wide variety of innovative applications in finance, web browsing, gaming, advertising, de-fi, identity management, web 3.0, metaverse and supply chain management all over the world.</p>
            </div>
        </div>
    );
};

export default CompareSection;