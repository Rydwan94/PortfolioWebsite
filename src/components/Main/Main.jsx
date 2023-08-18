import '../../css/Main.css'
import DescriptionContainer from './SubComponents/DescriptionContainer';
import MyProjectsContainer from './SubComponents/MyProjectsContainer';
import TechIconsContainer from './SubComponents/TechIconsContainer';


const Main = () => {
    return ( 
        <main className='mainContainer'>
            <DescriptionContainer />
            <TechIconsContainer />
            <MyProjectsContainer />
        </main>
     );
}
 
export default Main;