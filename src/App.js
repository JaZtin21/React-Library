import * as React from "react";
import { Routes, Route, Switch } from "react-router-dom";

import "./App.css";
import 'flowbite';

import Home from "./components/Home";
import Browse from "./components/Browse";
import Footer from "./components/Footer";
import Menu  from "./components/Menu";
import Topnav from "./components/Topnav";
import Openbook from "./components/Openbook";
import Studentlogin from "./components/Studentlogin";
import Bookmarks from "./components/Bookmarks";
import Advancedsearch from "./components/Advancedsearch";
import Adminlogin from "./components/Adminlogin";

function App() {
  return (
    <div >
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
             
              <Home />
             
            </>
          }
        />
        </Routes>
      <Routes>
        <Route
          path="/browse"
          element={
            <>
              <Topnav/>
              <Browse />
              <Footer/>
             
            </>
          }
        />
        </Routes>
         <Routes>
        <Route
          path="/openbook"
          element={
            <>
              <Topnav/>
              <Openbook/>
              <Footer/>
             
            </>
          }
        />
        </Routes>
        <Routes>
        <Route
          path="/studentlogin"
          element={
            <>
             
              <Studentlogin/>
              <Footer/>
             
            </>
          }
        />
        </Routes>
        <Routes>
        <Route
          path="/bookmarks"
          element={
            <>
              <Topnav/>
              <Bookmarks/>
              <Footer/>
             
             
            </>
          }
        />
        </Routes>
                <Routes>
        <Route
          path="/advancedsearch"
          element={
            <>
              <Topnav/>
              <Advancedsearch/>
             
             
             
            </>
          }
        />
        </Routes>
         <Routes>
        <Route
          path="/adminlogin"
          element={
            <>
              <Topnav/>
              <Adminlogin/>
              <Footer/>
             
             
             
            </>
          }
        />
        </Routes>
        

       
    </div>
  );
}

export default App;
