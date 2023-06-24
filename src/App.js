import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/pages/Footer/Footer";
import Portfolio from "./pages/Portfolio";
// -------------------------------------------------



function App() {
	
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
