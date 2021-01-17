import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./components/pages/About";
import Works from "./components/pages/Works";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/works' component={Works} />
          <Route path='/wayway' component={() => { 
     　　　　window.location.href = 'https://biz.wayway.jp/'; 
     　　　　return null;
　　　　　　}}/>
          <Route path='/flipflap' component={() => { 
     　　　　window.location.href = 'https://flipflap-dogstyle.jimdofree.com/'; 
     　　　　return null;
　　　　　　}}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
