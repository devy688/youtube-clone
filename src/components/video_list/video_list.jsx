import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onVideoClick, display, watch, search }) => {
  const listInWatch = watch === true ? styles.watch : styles.noWatch;

  return (
    <ul className={`${styles.videos} ${listInWatch}`}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
          search={search}
        />
      ))}
    </ul>
  );
};

export default VideoList;
