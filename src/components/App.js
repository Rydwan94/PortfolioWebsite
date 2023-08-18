import "../css/App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import RefProvider from "../context/context";
import Footer from "./Footer/Footer";

function App() {
  return (
    <RefProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </RefProvider>
  );
}

export default App;
