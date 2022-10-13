import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as PlayIcon} from "../../../assets/images/play-icon.svg";
import Modal from 'react-modal';
import ReactPlayer from "react-player";
import {ReactComponent as CloseIcon} from "../../../assets/images/x-modal-icon.svg";

const ExplainerBtn = ({link, url}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className={classes.modalWrapper}>
                    <div className={classes.iconWrapper} onClick={closeModal}>
                        <CloseIcon/>
                    </div>
                    <ReactPlayer
                        className='react-player'
                        config={{
                            youtube: {
                                playerVars: { disablekb: 1 }
                            }
                        }}
                        playIcon={<PlayIcon/>}
                        url={'https://www.youtube.com/watch?v=1x4-YS-PzYA'}
                        width={459}
                        height={245}
                    />
                </div>
            </Modal>
            <button className={classes.button} onClick={openModal}>
                {/*<a href={link} target={'_blank'}>*/}
                    Explainer Video
                    <PlayIcon/>
                {/*</a>*/}
            </button>
        </>
    );
};

export default ExplainerBtn;