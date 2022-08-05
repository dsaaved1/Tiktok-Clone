import React, {useState, useEffect} from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";



function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
            ({ url, channel, description, hashtags, song, likes, dislikes, comments, shares }) => (
              <Video
                url={url}
                channel={channel}
                description={description}
                hashtags={hashtags}
                song={song}
                likes={likes}
                dislikes={dislikes}
                comments={comments}
                shares={shares}
              />
            )
          )}
      </div>
    </div>
  );
}

export { App };