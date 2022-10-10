import React from 'react';
import {LINKS} from "constant";
import SocialItem from "./socialItem";
import classes from './styles.module.scss';
import {ReactComponent as RedditIcon} from "../../assets/images/reddit-icon.svg";
import {ReactComponent as InstaIcon} from "../../assets/images/instagram-icon.svg";
import {ReactComponent as FBIcon} from "../../assets/images/facebook-icon.svg";
import {ReactComponent as TwitterIcon} from "../../assets/images/twitter-icon.svg";
import {ReactComponent as DiscordIcon} from "../../assets/images/discord-icon.svg";
import {ReactComponent as TGIcon} from "../../assets/images/telegram-icon.svg";

const SocialLinks = () => {
    return (
        <div className={classes.wrapper}>
            <SocialItem link={LINKS.REDDIT}>
                <RedditIcon/>
            </SocialItem>
            <SocialItem link={LINKS.INSTAGRAM}>
                <InstaIcon/>
            </SocialItem>
            <SocialItem link={LINKS.FACEBOOK}>
                <FBIcon/>
            </SocialItem>
            <SocialItem link={LINKS.TWITTER}>
                <TwitterIcon/>
            </SocialItem>
            <SocialItem link={LINKS.DISCORD}>
                <DiscordIcon/>
            </SocialItem>
            <SocialItem link={LINKS.TELEGRAM}>
                <TGIcon/>
            </SocialItem>
        </div>
    );
};

export default SocialLinks;