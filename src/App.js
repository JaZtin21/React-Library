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
import Likedbooks from "./components/Likedbooks";
import Borrow from "./components/Borrow";
import Signup from "./components/Signup";
import Requestcopy from "./components/Requestcopy";
import Addbook from "./components/Addbook";

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
  
        <Route
          path="/studentlogin"
          element={
            <>
             <Topnav/>
              <Studentlogin/>
              <Footer/>
             
            </>
          }
        />
  
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
  
        <Route
          path="/advancedsearch"
          element={
            <>
              <Topnav/>
              <Advancedsearch/>
             
             
             
            </>
          }
        />
    
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
  
        <Route
          path="/likedbooks"
          element={
            <>
              <Topnav/>
              <Likedbooks/>
              <Footer/>
             
             
             
            </>
          }
        />
          
          <Route
          path="/borrow"
          element={
            <>
              <Topnav/>
              <Borrow/>
              <Footer/>
             
             
             
            </>
          }
        />
         <Route
          path="/requestedcopy"
          element={
            <>
              <Topnav/>
              <Requestcopy/>
              <Footer/>
             
             
             
            </>
          }
        />
         <Route
          path="/signup"
          element={
            <>
              <Topnav/>
              <Signup/>
              <Footer/>
             
             
             
            </>
          }
        />
        <Route
          path="/addbook"
          element={
            <>
              <Topnav/>
              <Addbook/>
              <Footer/>
             
             
             
            </>
          }
        />
        </Routes>
        

       
    </div>
  );
}

export default App;
