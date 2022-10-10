import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as BitcoinIcon} from "../../../../assets/images/bitcoin-icon-table.svg";
import {ReactComponent as EthereumIcon} from "../../../../assets/images/ethereum-icon-table.svg";
import {ReactComponent as RippleIcon} from "../../../../assets/images/ripple-icon-table.svg";
import {ReactComponent as QiIcon} from "../../../../assets/images/qi-icon-table.svg";
import {ReactComponent as CheckIcon} from "../../../../assets/images/check-icon.svg";
import {ReactComponent as XIcon} from "../../../../assets/images/check-x-icon.svg";
import ProgressBar from "@ramonak/react-progress-bar";

const TableBlockMobile = () => {
    return (
        <div className={classes.tableWrapper}>
            <table className={classes.tableFirstColumn}>
                <thead>
                    <tr>
                        <th className={classes.column}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={classes.rowHead}>
                                Decentralised
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.rowHead}>
                                Scalability
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.rowHead}>
                                Secure
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.rowHead}>
                                Speed
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.rowHead}>
                                Transaction fees
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.rowHead}>
                                Storage
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.rowHead}>
                                Consensus
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.rowHead}>
                                Application layer
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.rowHead}>
                                Environment friendly
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={classes.tableContentWrapper}>
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th className={classes.column}>
                            <div className={classes.columnHeadWrapper}>
                                <div>
                                    <BitcoinIcon/>
                                </div>
                                <div className={classes.columnHead}>
                                    Bitcoin
                                </div>
                            </div>
                        </th>
                        <th className={classes.column}>
                            <div className={classes.columnHeadWrapper}>
                                <div>
                                    <EthereumIcon/>
                                </div>
                                <div className={classes.columnHead}>
                                    Ethereum
                                </div>
                            </div>
                        </th>
                        <th className={classes.column}>
                            <div className={classes.columnHeadWrapper}>
                                <div>
                                    <RippleIcon/>
                                </div>
                                <div className={classes.columnHead}>
                                    Ripple
                                </div>
                            </div>
                        </th>
                        <th className={classes.column}>
                            <div className={classes.columnHeadWrapper}>
                                <div>
                                    <QiIcon/>
                                </div>
                                <div className={classes.columnHead}>
                                    Qi
                                </div>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <XIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <XIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <XIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <XIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <div className={classes.value}>4.6tps</div>
                                <ProgressBar
                                    completed={10}
                                    isLabelVisible={false}
                                    borderRadius="4px"
                                    bgColor="#FF136D"
                                    baseBgColor="rgba(255, 19, 109, 0.15)"
                                    height="4px"
                                    width="60px"
                                />
                            </div>
                        </td>
                        <td>
                            <div>
                                <div className={classes.value}>20tps</div>
                                <ProgressBar
                                    completed={20}
                                    isLabelVisible={false}
                                    borderRadius="4px"
                                    bgColor="#FF136D"
                                    baseBgColor="rgba(255, 19, 109, 0.15)"
                                    height="4px"
                                    width="60px"
                                />
                            </div>
                        </td>
                        <td>
                            <div>
                                <div className={classes.value}>1000tps</div>
                                <ProgressBar
                                    completed={50}
                                    isLabelVisible={false}
                                    borderRadius="4px"
                                    bgColor="#FF136D"
                                    baseBgColor="rgba(255, 19, 109, 0.15)"
                                    height="4px"
                                    width="60px"
                                />
                            </div>
                        </td>
                        <td>
                            <div>
                                <div className={classes.value}>2000tps</div>
                                <ProgressBar
                                    completed={100}
                                    isLabelVisible={false}
                                    borderRadius="4px"
                                    bgColor="#FF136D"
                                    baseBgColor="rgba(255, 19, 109, 0.15)"
                                    height="4px"
                                    width="60px"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.textRed}>
                                High
                            </div>
                        </td>
                        <td>
                            <div className={classes.textRed}>
                                High
                            </div>
                        </td>
                        <td>
                            <div className={classes.textGreen}>
                                Low
                            </div>
                        </td>
                        <td>
                            <div className={classes.textGreen}>
                                Low
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.text}>
                                DLT
                            </div>
                        </td>
                        <td>
                            <div className={classes.text}>
                                DLT
                            </div>
                        </td>
                        <td>
                            <div className={classes.text}>
                                DLT
                            </div>
                        </td>
                        <td>
                            <div className={classes.text}>
                                DLT
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={classes.text}>
                                POW
                            </div>
                        </td>
                        <td>
                            <div className={classes.text}>
                                POW->POS
                            </div>
                        </td>
                        <td>
                            <div className={classes.text}>
                                RPCA
                            </div>
                        </td>
                        <td>
                            <div className={classes.text}>
                                POW
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <XIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <XIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <XIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <XIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <CheckIcon/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableBlockMobile;