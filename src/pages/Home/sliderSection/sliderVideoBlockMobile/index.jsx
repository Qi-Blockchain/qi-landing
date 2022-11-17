import React, {useEffect, useRef, useState} from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import SlideVideo from "./slideVideo";
import axios from "axios";

const SliderBlockMobile = () => {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        getVideoList();
    }, []);

    const getVideoList = async function () {
        axios.get('http://localhost:8000/api/v1/landing/video')
            .then((response) => {
                const videoList = response.data.data.video;
                setVideo(videoList)
            })
            .catch(error => console.error('Error: ' + error));
    }

    return (
        <div>
            <Flicking align="prev">
                {video.map((currentVideo, index) =>
                    <div>
                        <SlideVideo url={currentVideo.url} heading={currentVideo.title}/>
                    </div>
                )}
            </Flicking>
        </div>
    );
};

export default SliderBlockMobile;