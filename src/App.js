import "./App.css";
import Landing from "./Landing";
import Contact from "./Contact";
import Category from "./Category";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Clients from "./Clients";

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
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
