import React from "react";
import { Element } from "react-scroll";
import Header from "./components/header_footer/Header";
import Featured from "./components/Featured/index";
import VenueInfo from "./components/Venueinfo/Venueinfo";
import Highlight from "./components/Highlights/index";
import Pricing from "./components/Pricing/index";
import Location from "./components/location/index";
import Footer from "./components/header_footer/Footer";
import "./assets/styles.css";

const App = () => (
  <div className="app">
    <Header title="sitename" description="site details" />

    <Element name="featured">
      <Featured title="Venue React Sample" />
    </Element>

    <Element name="venue-info">
      <VenueInfo />
    </Element>

    <Element name="highlights">
      <Highlight />
    </Element>

    <Element name="pricing">
      <Pricing />
    </Element> 

    <Element name="location">
      <Location />
    </Element>
    <Footer title={"sitename"} />
  </div>
);

export default App;
