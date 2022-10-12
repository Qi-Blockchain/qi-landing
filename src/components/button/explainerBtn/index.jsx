import React from 'react';
import classes from './styles.module.scss';
import {ReactComponent as PlayIcon} from "../../../assets/images/play-icon.svg";
import Modal from 'react-modal';

const ExplainerBtn = ({link}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            {/*<Modal*/}
            {/*    isOpen={modalIsOpen}*/}
            {/*    onRequestClose={closeModal}*/}
            {/*    contentLabel="Example Modal"*/}
            {/*>*/}
            {/*    <button onClick={closeModal}>close</button>*/}
            {/*    <div>I am a modal</div>*/}
            {/*    <form>*/}
            {/*        <input />*/}
            {/*        <button>tab navigation</button>*/}
            {/*        <button>stays</button>*/}
            {/*        <button>inside</button>*/}
            {/*        <button>the modal</button>*/}
            {/*    </form>*/}
            {/*</Modal>*/}
            <button className={classes.button} onClick={openModal}>
                <a href={link} target={'_blank'}>
                    Explainer Video
                    <PlayIcon/>
                </a>
            </button>
        </>
    );
};

export default ExplainerBtn;