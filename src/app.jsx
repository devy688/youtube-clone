import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  const [videos, setVideos] = useState([]);

  /* useEffect */
  // dependency array를 생략하면 state나 props이 업데이트 될 때마다 등록한 콜백함수를 호출
  // 빈 배열을 등록해두면 한 번만, 마운트 되었을 때 호출
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className={styles.app}>
        <SearchHeader />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
