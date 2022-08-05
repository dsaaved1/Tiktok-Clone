import React, { useState }  from 'react';
import './VideoSidebar.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

//{} are props
function VideoSidebar({likes, dislikes, comments, shares}) {

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <div className="videoSidebar">

      <div className="videoSidebar__button">
          <div class="profile">
          </div>
      </div>

    
      <div className="winOrLose">
        <div className="videoSidebar__button">
          {liked ? (
            <ThumbUpAltIcon fontSize="large" onClick={(e) => setLiked(false)} />
          ) : (
            <ThumbUpOffAltIcon
              fontSize="large"
              onClick={(e) => setLiked(true)}
            />
          )}
          <p>{liked ? likes + 1 : likes}</p>
        </div>

        <div className="videoSidebar__button">
          {disliked ? (
            <ThumbDownAltIcon fontSize="large" onClick={(e) => setDisliked(false)} />
          ) : (
            <ThumbDownOffAltIcon
              fontSize="large"
              onClick={(e) => setDisliked(true)}
            />
          )}
          
          <p>{disliked ? dislikes - 1 : dislikes}</p>
        </div>

      </div>
     

      <div className="videoSidebar__button">
          <ChatBubbleOutlineIcon fontSize="large" />
          <p>{comments}</p>
      </div>

      <div className="videoSidebar__button">
          <ShareIcon fontSize="large" />
          <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar
