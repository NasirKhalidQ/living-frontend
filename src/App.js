import "./App.css";
import Landing from "./Landing";
import Contact from "./Contact";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Clients from "./Clients";
import Careers from "./Careers";
import Apply from "./Apply";
import Services from "./Services";
import About from "./About";
import Blog from "./Blog";
import Articles from "./Articles/index";
import Article from "./Article/index";
import Nav from "./components/Nav";
import Category from "./Category/index";
import Marketings from "./Marketings";
import RealEstates from "./RealEstates";
import IT from "./IT";
import Web from "./Web";
import Quote from "./Quote";

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
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/apply/:position" exact>
          <Apply />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/marketing">
          <Marketings />
        </Route>
        <Route path="/realestate">
          <RealEstates />
        </Route>
        <Route path="/it">
          <IT />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/web">
          <Web />
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
