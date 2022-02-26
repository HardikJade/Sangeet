import "./css/App.css"
import MainScreenProfile from "./components/MainScreenProfile";
import MainScreenCategory from "./components/MainScreenCategory";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import BottomControl from "./components/BottomControl";
import "./css/Responsive.css"
function App() {
  return (
    <>
      <div className="main_container">
        <div className="content_container">
          <div className="left_sidebar">
            <MainScreenProfile name = "Hardik Jade" email = "email@gmail.com"/>
            <div className="CategoryCont">
              <MainScreenCategory heading="Browse"/>
              <MainScreenCategory heading="Discover"/>
            </div>
          </div>
          <div className="right_content">
            <TopBar/>
            <MainContent/>
          </div>
        </div>
        <div className="bottom_container">
          <BottomControl/>
        </div>
      </div>
    </>
  );
}
export default App;