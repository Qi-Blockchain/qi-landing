import React from 'react';
import classes from './styles.module.scss';
import ReactPlayer from "react-player";
import {ReactComponent as PlayIcon} from "../../../../../assets/images/video-play-icon.svg";

const SlideItem = ({ heading, url}) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.videoWrapper}>
                <ReactPlayer
                    className='react-player'
                    config={{
                        youtube: {
                            playerVars: { disablekb: 1 }
                        }
                    }}
                    playIcon={<PlayIcon/>}
                    url={url}
                    width={459}
                    height={245}
                />
            </div>
            <p className={classes.heading}>{heading}</p>
        </div>
    );
};

export default SlideItem;