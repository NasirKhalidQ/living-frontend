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
import General from "./General";
import Pricing from "./Pricing";
import RealEstate from "./RealEstate";
import SEO from "./SEO";
import Sectors from "./Sectors";
import Marketing from "./Marketing";
import Social from "./Social";
import Graphic from "./Graphic";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/quote">
          <Quote />
        </Route>
        <Route exact path="/careers">
          <Careers />
        </Route>
        <Route path="/apply/:position" exact>
          <Apply />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/services/:category">
          <General />
        </Route>
        <Route exact path="/social">
          <Social />
        </Route>
        <Route exact path="/graphic">
          <Graphic />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/marketing">
          <Marketings />
        </Route>
        <Route exact path="/seo">
          <SEO />
        </Route>
        <Route path="/realestate" exact>
          <RealEstates />
        </Route>
        {/* <Route path="/realestate/:area" exact>
          <RealEstate />
        </Route> */}
        <Route exact path="/it">
          <IT />
        </Route>
        <Route exact path="/clients">
          <Clients />
        </Route>
        <Route exact path="/web">
          <Web />
        </Route>
        <Route exact path="/about">
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
        {/* <Route path="/:area/:sector" exact>
          <Sectors />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
