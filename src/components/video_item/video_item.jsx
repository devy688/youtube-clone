import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      <li className={`${styles.container} ${displayType}`}>
        <div className={styles.video}>
          <div className={styles["thumbnails-wrap"]}>
            <img
              className={styles.thumbnails}
              src={snippet.thumbnails.medium.url}
              alt="video thumbnail"
              onClick={() => onVideoClick(video)}
            />
          </div>
          <div className={styles.metadata}>
            <img
              className={styles["channel-img"]}
              src={video.channelImgURL}
              alt="channel-thumbnails"
            />
            <div className={styles.info}>
              <p className={styles.title} onClick={() => onVideoClick(video)}>
                {snippet.title}
              </p>
              <p className={styles["channel-title"]}>{snippet.channelTitle}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
