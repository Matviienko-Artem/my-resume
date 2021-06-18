import SideBar from "./components/SideBar/SideBar";
import style from "./styles.module.css";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className={style.wrapper}>
      <SideBar />
      <AboutMe />
    </div>
  );
}

export default App;
