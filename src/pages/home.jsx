import React from "react";
import styles from "../app.module.css";
import VideoList from "../components/video_list/video_list";

const Home = ({ videos, selectVideo }) => {
  return (
    <div className={styles.main}>
      <section className={styles.content}>
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display="grid"
            search={false}
            channelImg={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
