import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import Channel from "../channel/channel";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display, search }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    const history = useHistory();

    const goToWatch = () => {
      history.push(`/watch/${video.id}`);
    };

    return (
      <li className={`${styles.container} ${displayType}`}>
        <div className={styles.video}>
          <div className={styles.thumbnailsWrap}>
            <img
              className={styles.thumbnails}
              src={snippet.thumbnails.medium.url}
              alt="video thumbnail"
              onClick={() => {
                onVideoClick(video);
                goToWatch();
              }}
            />
          </div>
          <div className={styles.metadata}>
            {!search && (
              <>
                <img
                  className={styles.channelImg}
                  src={video.channelImgURL}
                  alt="channel-thumbnails"
                />
                <div className={styles.info}>
                  <p
                    className={styles.title}
                    onClick={() => {
                      onVideoClick(video);
                      goToWatch();
                    }}
                  >
                    {snippet.title}
                  </p>
                  <p className={styles.channelTitle}>{snippet.channelTitle}</p>
                </div>
              </>
            )}
            {search && (
              <>
                <div className={styles.info}>
                  <p
                    className={styles.title}
                    onClick={() => {
                      onVideoClick(video);
                      goToWatch();
                    }}
                  >
                    {snippet.title}
                  </p>
                  <Channel video={video} />
                </div>
              </>
            )}
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
