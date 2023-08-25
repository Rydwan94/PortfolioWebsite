import "../../css/Main.css";
import DescriptionContainer from "./SubComponents/DescriptionContainer";
import MyHobbiesContainer from "./SubComponents/MyHobbiesContainer";
import MyProjectsContainer from "./SubComponents/MyProjectsContainer";
import ProgressBarContainer from "./SubComponents/ProgressBarContainer";

const Main = () => {
  return (
    <main className="mainContainer">
      <DescriptionContainer />
      <ProgressBarContainer />
      <MyProjectsContainer />
      <MyHobbiesContainer />
    </main>
  );
};

export default Main;
