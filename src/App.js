import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        
        <Routes>
          <Route exact path="/" element={<><Header/><Home/><Footer/></>}></Route>
          <Route exact path="/checkout" element={<><Header/><Checkout/><Footer/></>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
      


  );
}

export default App;
