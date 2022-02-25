
import "./css/App.css"
import MainScreenProfile from "./components/MainScreenProfile";
function App() {
  return (
    <>
      <div className="main_container">
        <div className="content_container">
          <div className="left_sidebar">
            <MainScreenProfile/>
          </div>
          <div className="right_content"></div>
        </div>
        <div className="bottom_container"></div>
      </div>
    </>
  );
}

export default App;
