import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <div className={styles.app}>
        <SearchHeader />
        <VideoList />
      </div>
    </>
  );
}

export default App;
