import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchHeader from "./components/search_header/search_header";
import NavBar from "./components/nav_bar/nav_bar";
import Home from "./pages/home";
import Watch from "./pages/watch";
import styles from "./app.module.css";
import Search from "./pages/search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const selectVideo = (video) => {
    setSelectedVideo(video);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      .then((videos) => {
        setVideos(videos);
        setLoading(false);
      });
  }, [youtube]);

  return (
    <BrowserRouter basename="/youtube-clone">
      {loading && <>Loading...</>}
      {!loading && (
        <div className={styles.app}>
          <SearchHeader onSearch={search} setSelectedVideo={setSelectedVideo} />
          <nav className={styles.navbar}>
            <NavBar />
          </nav>
          <Switch>
            <Route exact path="/">
              <Home
                videos={videos}
                selectedVideo={selectedVideo}
                selectVideo={selectVideo}
              />
            </Route>
            <Route path="/search">
              <Search
                youtube={youtube}
                videos={videos}
                selectVideo={selectVideo}
              />
            </Route>
            <Route path="/watch/:videoId">
              <Watch
                youtube={youtube}
                videos={videos}
                selectVideo={selectVideo}
                selectedVideo={selectedVideo}
              />
            </Route>
          </Switch>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
