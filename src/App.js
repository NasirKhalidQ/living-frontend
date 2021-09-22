import "./App.css";
import NavBar from "./Navbar";
import Landing from "./Landing";
import Footer from "./Footer";
import Contact from "./Contact";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing imgpath="./imgs/interior.jpg" />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
