import React from "react";
import styles from "./channel.module.css";

const Channel = ({ video }) => {
  return (
    <div className={styles.channel}>
      <img className={styles.img} src={video.channelImgURL} alt="avatar" />
      <div className={styles.info}>
        <span className={styles.name}>{video.snippet.channelTitle}</span>
      </div>
    </div>
  );
};

export default Channel;
