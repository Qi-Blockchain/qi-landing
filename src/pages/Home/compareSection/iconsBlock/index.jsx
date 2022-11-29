import React from 'react';
import IconsItem from "./iconsItem";
import classes from './styles.module.scss';
import {ReactComponent as QiIcon} from "../../../../assets/images/QIBadge.svg";
import {ReactComponent as RippleIcon} from "../../../../assets/images/ripple-icon-table.svg";
import {ReactComponent as EthereumIcon} from "../../../../assets/images/ethereum-icon-table.svg";
import {ReactComponent as BitcoinIcon} from "../../../../assets/images/bitcoin-icon-table.svg";

const IconsBlock = () => {
    return (
        <div className={classes.wrapper}>
            <IconsItem icon={<QiIcon/>} title={'QIE'} value={'2000tps'} percent={100}/>
            <IconsItem icon={<RippleIcon/>} title={'Ripple'} value={'1000tps'} percent={50}/>
            <IconsItem icon={<EthereumIcon/>} title={'Ethereum'} value={'20tps'} percent={10}/>
            <IconsItem icon={<BitcoinIcon/>} title={'Bitcoin'} value={'4.6tps'} percent={5}/>
        </div>
    );
};

export default IconsBlock;