import "./css/App.css"
import MainScreenProfile from "./components/MainScreenProfile";
import MainScreenCategory from "./components/MainScreenCategory";
function App() {
  return (
    <>
      <div className="main_container">
        <div className="content_container">
          <div className="left_sidebar">
            <MainScreenProfile/>
            <div className="CategoryCont">
              <MainScreenCategory heading="Browse"/>
              <MainScreenCategory heading="Discover"/>
            </div>
          </div>
          <div className="right_content">
            <input type="text" className="searchBar" placeholder="Search" name="" id="" />
            <div className="upgrade">
              <div className="upgraderButton">Upgrade To Premium</div>
              <div className="settingButton"></div>
              <div className="notificationButton"></div>
            </div>
          </div>
        </div>
        <div className="bottom_container"></div>
      </div>
    </>
  );
}
export default App;