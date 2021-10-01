import "./App.css";
import Landing from "./Landing";
import Contact from "./Contact";
import Category from "./Category";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Clients from "./Clients";
import Careers from "./Careers";
import Apply from "./Apply";
import Services from "./Services";
import About from "./About";
import Marketing from "./Marketing";
import RealEstate from "./RealEstate";
import Blog from "./Blog";

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
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/marketing">
          <Marketing />
        </Route>
        <Route path="/realestate">
          <RealEstate />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
