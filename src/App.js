import "./App.css";
import Landing from "./Landing";
import Contact from "./Contact";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Clients from "./Clients";
import Careers from "./Careers";
import Apply from "./Apply";
import Services from "./Services";
import About from "./About";
import Marketing from "./Marketing";
import RealEstate from "./RealEstate";
import Blog from "./Blog";
import Articles from "./Articles/index";
import Article from "./Article/index";
import Nav from "./components/Nav";
import Category from "./Category/index";

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
        <Route path="/articles" exact>
          <Nav />
          <Articles />
        </Route>
        <Route path="/article/:id" exact>
          <Nav />
          <Article />
        </Route>
        <Route path="/category/:id" exact>
          <Category />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
