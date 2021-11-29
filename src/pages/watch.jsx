import React from "react";
import styles from "../app.module.css";
import VideoDetail from "../components/video_detail/video_detail";
import VideoList from "../components/video_list/video_list";

const Watch = ({ youtube, videos, selectVideo, selectedVideo }) => {
  return (
    <section className={styles.watch}>
      <div className={styles.videoDetail}>
        <VideoDetail video={selectedVideo} />
      </div>
      <div className={styles.videoList}>
        <VideoList
          youtube={youtube}
          videos={videos}
          onVideoClick={selectVideo}
          display="list"
          watch={true}
          search={false}
        />
      </div>
    </section>
  );
};

export default Watch;
