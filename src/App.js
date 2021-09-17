import "./App.css";
import NavBar from "./Navbar";
import Landing from "./Landing";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <Landing imgpath="./imgs/interior.jpg" />
      <Landing imgpath="./imgs/background.jpg" />
      <Landing imgpath="./imgs/interior.jpg" />
      <Footer />
    </>
  );
}

export default App;
