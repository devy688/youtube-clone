import React from "react";
import styles from "../app.module.css";
import VideoList from "../components/video_list/video_list";

const Search = ({ youtube, videos, selectVideo }) => (
  <section className={styles.searchList}>
    <VideoList
      youtube={youtube}
      videos={videos}
      onVideoClick={selectVideo}
      display="list"
      search={true}
      channelImg={true}
    />
  </section>
);

export default Search;
