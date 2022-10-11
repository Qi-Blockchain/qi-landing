import React from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import SlideVideo from "./slideVideo";

const SliderBlockMobile = () => {
    return (
        <div>
            <Flicking align="prev">
                <div>
                    <SlideVideo url={'https://www.youtube.com/embed/aSDkcfBdU2c'} heading={'Byzantine Generals problem SOLVED'}/>
                </div>
                <div>
                    <SlideVideo url={'https://www.youtube.com/embed/6xBKV7KP8RI'} heading={'Metaverse - New version of the Internet\n'}/>
                </div>
                <div>
                    <SlideVideo url={'https://www.youtube.com/embed/CMqRqd97rQg'} heading={'Hovr NFT Market Place explainer video'}/>
                </div>
                <div>
                    <SlideVideo url={'https://www.youtube.com/embed/RVZ1DuoyUSQ'} heading={'Web 3.0 - The future of the Internet\n'}/>
                </div>
                <div>
                    <SlideVideo url={'https://www.youtube.com/embed/uzab9kDPw7I'} heading={'How NFT`s will change our lives'}/>
                </div>
                <div>
                    <SlideVideo url={'https://www.youtube.com/embed/1pMA5iu35y8'} heading={'Decentralised Finance (Defi) Explained'}/>
                </div>

            </Flicking>
        </div>
    );
};

export default SliderBlockMobile;