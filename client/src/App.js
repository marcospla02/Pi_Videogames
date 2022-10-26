import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandindgPage/LandingPage";
import Home from "./components/VgHome/Home";
import VgCreate from "./components/VgCreate/VgCreate";
import About from "./components/About/About";
import VgDetail from "./components/VgDetail/Detail";
import React from "react";

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={VgCreate} />
      <Route exact path="/detail/:id" component={VgDetail} />
      <Route exact path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
