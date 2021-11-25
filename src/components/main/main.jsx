import React from "react";
import VideoDetail from "../video_detail/video_detail";
import VideoList from "../video_list/video_list";
import styles from "./main.module.css";

const Main = ({ videos, selectedVideo, selectVideo }) => {
  return (
    <div className={styles.main}>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
};

export default Main;
