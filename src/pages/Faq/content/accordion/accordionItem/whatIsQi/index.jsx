import React, {useState} from 'react';
import classes from '../styles.module.scss';
import {ReactComponent as CaretRight} from "../../../../../../assets/images/caret-right-icon.svg";
import {ReactComponent as CaretDown} from "../../../../../../assets/images/caret-down-icon.svg";
import classNames from "classnames";

const AccordionItem = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleVisibility = () => setIsActive(!isActive);

    const buttonClasses = () => classNames({
        [classes.button]: true,
        [classes.buttonActive] : isActive
    });

    const textClasses = () => classNames({
        [classes.content]: true,
        [classes.contentActive] : isActive
    });

    return (
        <div>
            <button className={buttonClasses()} onClick={handleToggleVisibility}>
                <div className={classes.headingWrapper}>
                    What is QI?
                </div>
                <div>
                    {isActive ?
                        <CaretDown/>
                        :
                        <CaretRight/>
                    }
                </div>
            </button>
            <p className={textClasses()}>
                Qi pronounced Chi is usually translated as “vital life force,” but Qi goes beyond that simple translation. According to Classical Chinese Philosophy, Qi is the force that makes up and binds together all things in the universe. It is paradoxically, both everything and nothing.  Qi is a decentralised POW (Proof of work) blockchain with an application native currency which is leveraging functionality of creating fungible and non-fungible assets using Remote Procedure call (RPC) methods.  QIE is able to handle 300 times more transactions per second than Bitcoin and 10 times more than SWIFT.  Qi is scalable hence other companies are already using it as primary payment method of several fully developed I-store apps with real use cases.  There is a limited amount of only 150,000,000 Qi coins and transaction fees remain almost zero ensuring a futuristic and feasible way to transact.  These coins will be mined over almost a hundred years.
            </p>
            <p className={textClasses()}>
                Qi enables the deployment of smart contracts and decentralized applications (dApps) to be built and run without any downtime, fraud, control, or interference from a third party.  Decentralized applications—also known as "dApps" or "dapps"—are digital applications that run on a blockchain network of computers instead of relying on a single computer.  Benefits of dApps include the safeguarding of user privacy, the lack of censorship, and the flexibility of development.  The use of blockchain enables a dApp to process data through distributed networks and to execute transactions.  Qi can be used for a wide variety of innovative applications in finance, web browsing, gaming, advertising, de-fi, identity management, web 3.0, metaverse and supply chain management all over the world.
            </p>
        </div>
    );
};

export default AccordionItem;