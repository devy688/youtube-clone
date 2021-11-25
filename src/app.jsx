import SearchHeader from "./components/search_header/search_header";
import NavBar from "./components/nav_bar/nav_bar";
import Main from "./components/main/main";
import styles from "./app.module.css";
import { useCallback, useEffect, useState } from "react";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);

      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
        });
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
      <nav className={styles.navbar}>
        <NavBar />
      </nav>
      <Main
        videos={videos}
        selectedVideo={selectedVideo}
        selectVideo={selectVideo}
      />
    </div>
  );
}

export default App;
