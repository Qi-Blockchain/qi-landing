import React, {useState} from 'react';
import classes from '../styles.module.scss';
import {ReactComponent as CaretRight} from "../../../../../../assets/images/caret-right-icon.svg";
import {ReactComponent as CaretDown} from "../../../../../../assets/images/caret-down-icon.svg";
import {ReactComponent as InfoIcon} from "../../../../../../assets/images/info-icon.svg";
import classNames from "classnames";

const TransactionFeesDetermination = () => {
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

    const labelInfoClasses = () => classNames({
        [classes.labelInfo]: true,
        [classes.labelInfoActive] : isActive
    });

    const breakLineClasses = () => classNames({
        [classes.breakLine]: true,
        [classes.breakLineActive] : isActive
    });

    return (
        <div>
            <button className={buttonClasses()} onClick={handleToggleVisibility}>
                <div className={classes.headingWrapper}>
                    How is transaction fees determined?
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
                How the gas fees (transaction fees) are calculated on Ethereum: Each transaction on the Ethereum blockchain requires a certain amount of computational power and gas is the fee paid to miners for providing that computational power.  The price of gas is denoted in gwei (giga wei). Wei is the smallest fraction of an ether, i.e. 1 ether equals 1,000,000,000,000,000,000 wei, so 1 gwei is 1,000,000,000 (1 billion) wei or 0.000000001 ETH.  The minimum amount needed for the simplest transaction on the Ethereum network, for example moving ETH between two addresses, is 21,000 units. More complex transactions involving
                smart contracts such as buying other tokens or staking your tokens require a lot more gas.
            </p>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                There are two elements that impact the cost of any given transaction:
                <br className={breakLineClasses()}/>
                -  gas price at the time of transaction, and
                <br className={breakLineClasses()}/>
                -  gas required for a particular transaction.
            </p>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                Example of moving Ethereum between two addresses: We know that this transaction requires 21,000 units.
                <br className={breakLineClasses()}/>
                The gas fee for standard speed at the moment of writing is 134 gwei.  https://ethgas.watch/ - Current gwei of 134
                Gas units (limit) * Gas price per unit (in gwei) = Gas fee
                <br className={breakLineClasses()}/>
                21,000 * 134 = 2,814,000 gwei
                <br className={breakLineClasses()}/>
                2,814,000 gwei is 0.002814 ETH, which is at the current prices 9.85 USD (1 ETH = $3500).
                <br className={breakLineClasses()}/>
            </p>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>
                BUT...
                <br className={breakLineClasses()}/>
                There was a large flash crash on 19th May 2021 and gas prices hovered around 1,500-2,000 gwei. So…
                <br className={breakLineClasses()}/>
                21,000 * 2,000 = 42,000,000 gwei
                <br className={breakLineClasses()}/>
                That’s 0.042 ETH, which at this moment in time is 147 USD… all that just to move your ETH, we’re not doing anything fancy here.
                <br className={breakLineClasses()}/>
                Now imagine a more complex transaction, which requires say 100,000 units of gas… suddenly we’re looking at around 700 USD.
            </p>
            <br className={breakLineClasses()}/>
            <br className={breakLineClasses()}/>
            <p className={textClasses()}>This is a fair chunk of money to burn in fees.</p>
            <div className={labelInfoClasses()}><InfoIcon/> <span>QI only charges 1 Gwei</span></div>
        </div>
    );
};

export default TransactionFeesDetermination;