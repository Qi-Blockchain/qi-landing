import React, {useRef} from 'react';
import Modal from 'react-modal';
import classes from './styles.module.scss';
import SectionHeading from "./sectionHeading";
import NumbersBlock from "./numbersBlock";
import {BuyBtn} from "components";
import ChartBlock from "./chartBlock";
import rockChart from "../../../assets/images/rock-chart.png";

const paymentSettings = {
    apiKey: '0a2236fc-af87-4939-bb34-9eb3f0280e77',
    colors: {
        main: '#453fd6',
        background: '#100f0f'
    }
};

const paymentStyles = {
    content: {
        width: 'fit-content',
        height: 'fit-content'
    },
};

const LiveChartSection = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const ref = useRef();

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    const openPaymentForm = async () => {
        await openModal();

        const widget = new window.SwipeluxWidget(ref.current, paymentSettings);
        widget.init()
    }

    return (
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                <div className={classes.bodyWrapper}>
                    <div className={classes.blockWrapper}>
                        <SectionHeading/>
                        <NumbersBlock/>
                        <div className={classes.btnWrapper}>
                            <BuyBtn onClick={openPaymentForm}/>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                style={paymentStyles}
                                className='paymentModal'
                            >
                                <div ref={ref} className={classes.payment}/>
                            </Modal>
                        </div>

                    </div>
                    <div className={classes.chartBlockWrapper}>
                        <ChartBlock/>
                    </div>
                </div>
                <div className={classes.footerWrapper}>
                    Buy on
                    &nbsp;
                    <a className={classes.link} href={'https://p2pb2b.com/trade/QIE_USDT/'} target={'_blank'}
                       rel="noopener noreferrer">
                        p2pb2b
                    </a>
                    ,
                    &nbsp;
                    <a className={classes.link} href={'https://www.digifinex.com/en-ww/trade/USDT/QIE'}
                       target={'_blank'} rel="noopener noreferrer">
                        digifinex
                    </a>,
                    &nbsp;
                    <a target={'_blank'} className={classes.link}
                       href={'https://www.bitmart.com/trade/en?symbol=QIE_USDT&layout=basic'} rel="noopener noreferrer">
                        bitmart
                    </a>,
                    &nbsp;
                    <a className={classes.link} href={'https://www.xt.com/trade/qie_usdt'} target={'_blank'}
                       rel="noopener noreferrer">
                        xt.com
                    </a>
                </div>
            </section>
            <div className={classes.rock}>
                <img src={rockChart} alt="rock chart"/>
            </div>
        </div>
    );
};

export default LiveChartSection;