import React from 'react';
import AccordionItem from "./accordionItem";
import WhatIsQi from "./accordionItem/whatIsQi";
import classes from './styles.module.scss';
import TransactionFeesDetermination from "./accordionItem/transactionFeesDetermination";
import BlockchainRequirements from "./accordionItem/blockchainRequirements";
import AccordionLink from "./accordionItem/accordionLink";
import AccordionLinkWithDescription from "./accordionItem/accordionLinkWithDescription";
import AccordionLinkTG from "./accordionItem/accordionLinkTG";
import AccordionWallet from "./accordionItem/accordionWallet";
import AccordionCompare from "./accordionItem/accordionCompare";

const Accordion = () => {
    return (
        <div className={classes.wrapper}>
            <AccordionItem heading={'What is the difference between Benqi(QI) and Qi Blockchain(QIE)?'} text={'    What is the difference between Benqi(QI) and Qi Blockchain(QIE)?\n' +
                '    There is only one QI Blockchain with ticker or trading symbol QIE. This should not be confused with erc20 token Benqi (QI as token trading symbol) which is a completely different project. Qi Blockchain allows for projects like benqi to be built on our chain. QI blockhain with trading symbol QIE is a very advanced blockchain unmatched in the market. Tokens are built on chains like QI Blockchain.'}/>
            <WhatIsQi/>
            <TransactionFeesDetermination/>
            <BlockchainRequirements/>
            <AccordionCompare/>
            <AccordionWallet/>
            <AccordionLinkTG/>
            <AccordionLinkWithDescription heading={'Does Qi have a developer resource kit functionality for someone to build an app on Qi?'} text={'Yes they have follow this link:'} url={'https://docs.qiblockchain.online/'}/>
            <AccordionLinkWithDescription heading={'Why am I getting an error 404 besu file not found?'} text={'Please ensure you use the right Besu version 22.7.0'} url={'https://github.com/hyperledger/besu-docs/releases/tag/22.7.0'}/>
            <AccordionItem heading={'How is QI pronounced?'} text={'Chi'}/>
            <AccordionItem heading={'How many Qi coins in existence?'} text={'There will be a maximum of ONLY 150,000,000 in total fixed supply mined over almost a hundred years. No more will be created.'}/>
            <AccordionItem heading={'Does Qi have an application layer?'} text={'Yes'}/>
            <AccordionItem heading={'What is crypto mining?'} text={'Cryptocurrency mining is a process of creating new digital "coins." However, that is as far as simplicity goes. The process of recovering these coins requires solving complex puzzles, validating cryptocurrency transactions on a blockchain network and adding them to a distributed ledger to locate them.  Miner receives rewards for verifying complex math problems.  There are only 150 million QIE coins and will be mined over roughly 100 years.  NO ICO event was held for QIE making is completely decentralised.'}/>
            <AccordionItem heading={'Where can I mine QIE?'} text={'The community has created mining pools and this is third party sites.  You can join www.qiemining.site as a mining pool to ensure more stable earnings at your own risk.  Cryptocurrency by nature carries risk.'}/>
            <AccordionItem heading={'Which exchanges are QIE listed on?'} text={'XT.com, Bitmart, Digifinex and P2pb2b.com'}/>
            <AccordionLink heading={'Where can I view developer documentation to build dapps on QI network?'} url={'https://docs.qiblockchain.online/'}/>
            <AccordionLink heading={'How to add a node to mine solo?'} url={'https://docs.qiblockchain.online/build-and-api/run-a-qi-blockchain-full-node'}/>
            <AccordionLink heading={'Where can I view more details on QIE?'} url={'https://coinmarketcap.com/currencies/qi-blockchain/'}/>
            <AccordionItem heading={'What are the block rewards and block times?'} text={'Similar to Bitcoin starting with a 50 BTC block reward, QI started with a 2 QIE block reward mid-2022 and will go down to 0.02 as network difficulty increases over time.  The block times are dynamic and depends on how many miners are on the network but currently averaging around 10 seconds.'}/>
        </div>
    );
};

export default Accordion;