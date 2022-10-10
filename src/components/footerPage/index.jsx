import React from 'react';
import classes from './styles.module.scss';
import LogoFooter from "./logoFooter";
import CopyrightBlock from "../copyrightBlock";
import Socialbar from "../socialbar";
import MentionLinks from "../mentionLinks";
import useScreenWidth from "../../hook/useScreenWIdth";
import Navbar from "../navbar";

const FooterPage = () => {
    const screenWidth = useScreenWidth();

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {screenWidth > 1024 ?
                    <>
                        <div className={classes.blockWrapper}>
                            <LogoFooter/>
                            <CopyrightBlock/>
                        </div>
                        <div className={classes.blockWrapper}>
                            <MentionLinks/>
                            <Socialbar/>
                        </div>
                    </>
                    :
                    <div className={classes.mobileWrapper}>
                        <Navbar/>
                        <MentionLinks/>
                        <Socialbar/>
                        <CopyrightBlock/>
                    </div>
                }

            </div>
        </div>
    );
};

export default FooterPage;