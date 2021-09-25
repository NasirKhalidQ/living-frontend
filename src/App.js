import "./App.css";
import Landing from "./Landing";
import Contact from "./Contact";
import Category from "./Category";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Clients from "./Clients";
import Careers from "./Careers";
import Apply from "./Apply";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/apply">
          <Apply />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
