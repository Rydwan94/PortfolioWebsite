import "../../css/Main.css";
import DescriptionContainer from "./SubComponents/DescriptionContainer";
import MyProjectsContainer from "./SubComponents/MyProjectsContainer";
import ProgressBarContainer from "./SubComponents/ProgressBarContainer";

const Main = () => {
  return (
    <main className="mainContainer">
      <DescriptionContainer />
      <ProgressBarContainer />
      <MyProjectsContainer />
    </main>
  );
};

export default Main;
