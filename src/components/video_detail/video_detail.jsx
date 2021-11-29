import React from "react";
import Channel from "../channel/channel";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        height="450px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.info}>
        <p className={styles.title}> {snippet.title}</p>
      </div>
      <Channel video={video} />
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
