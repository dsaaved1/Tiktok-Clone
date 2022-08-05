//component file
import React, {useRef, useState} from "react";
import LeftSidebar from "./LeftSidebar";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";


function Video({ url, channel, description, hashtags, song, likes, dislikes, comments, shares}) {
    //initially there is no reference so we use useRef as a hook
    //we give it a value of null because there is no reference rn, later we attatch it using ref={}
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    //when we click the video
    const onVideoPress = () => {
        //if video is playing
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        //if video is paused
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video 
                className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src = {url}
            ></video>
            <VideoFooter 
                channel={channel}
                description={description}
                hashtags={hashtags}
                song={song}
            />
            <VideoSidebar 
                likes={likes}
                dislikes={dislikes}
                comments={comments}
                shares={shares}
            />
            <LeftSidebar />
        </div>
    )
}

export default Video;