import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter({ channel, description, hashtags, song }) {
  return (
    <div className="videoFooter">

      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <p id="hashtags">{hashtags}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon"/>
          <p>{song}</p>
        </div>
      </div>

      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter