import "./App.css";
import NavBar from "./Navbar";
import Landing from "./Landing";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing imgpath="./imgs/interior.jpg" />
      <Landing imgpath="./imgs/background.jpg" />
      <Landing imgpath="./imgs/interior.jpg" />
      <Footer />
    </div>
  );
}

export default App;
