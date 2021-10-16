import React from "react";

const VideoItem = (props) => {
  const { title, channelTitle, description } = props.video.snippet;

  return (
    <>
      <h1>{title}</h1>
      <h2>{channelTitle}</h2>
      <pre>{description}</pre>
    </>
  );
};

export default VideoItem;
