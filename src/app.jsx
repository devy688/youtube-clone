import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import { useCallback, useEffect, useState } from "react";
import VideoDetail from "./components/video_detail/video_detail";

// 구현해 볼 것
// 1. 브라우저창이 작아지면 리스트를 아래로 내리기 (media query 사용)
// 2. UI 멋지게 구현해보기
function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      // 목록 받아오는 중에 로딩스피너 보여주기

      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
        }); // 에러페이지를 만들고 싶다면 에러state를 만들어서 이를 업데이트
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
