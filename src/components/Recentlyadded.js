import React from 'react';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./style/browse.css";
import "./style/sidemenu.css";
import "./style/bookmarks.css";
import "./style/advancedsearch.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Menu  from "./Menu.js";
import Topnav from "./Topnav";
import 'flowbite';
import { ReactDimmer } from "react-dimmer";

const Recentlyadded= () => {
 return (
     <>
     <div className='advancedsearchcont  '>
         <div className='relative advancedsearchcont2  w-full  pt-7 pb-5 px-1'>
             <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/bg2.png') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>

           
            
             <h1 className='advancetext mt-5' style={{zIndex:"2"}}> Recently Added </h1>
           <div  style={{zIndex:"2"}} className='searchresultcont w-full grid grid-row-2 desktop:grid-cols-6 laptop:grid-cols-6 tabletlg:grid-cols-4 tablet:grid-cols-3 phone:grid-cols-3 phone:gap-1 tablet:gap-1 tabletlg:gap-2 '>
           <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry2.png') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry2.png')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Harry Potter and the Chamber of Secrets</div>
            <p className=" cardauthor  mb-1">
            -JK Rowling
            </p>
            </div>
     
            </div>
          </div>
          </div>
            <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Mountain</div>
            <p className=" cardauthor  mb-1">
            -JK Rowling
            </p>
            </div>
     
            </div>
          </div>
          </div>

                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry2.png') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry2.png')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Harry Potter and the Chamber of Secrets</div>
            <p className=" cardauthor  mb-1">
            -JK Rowling
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Mountain</div>
            <p className=" cardauthor  mb-1">
            -Author
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Harry Potter and the Sorcerer's Stone</div>
            <p className=" cardauthor  mb-1">
            -Author
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Mountain</div>
            <p className=" cardauthor  mb-1">
            -Author
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Mountain</div>
            <p className=" cardauthor  mb-1">
            -Author
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Mountain</div>
            <p className=" cardauthor  mb-1">
            -Author
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Mountain</div>
            <p className=" cardauthor  mb-1">
            -Author
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Mountain</div>
            <p className=" cardauthor  mb-1">
            -Author
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Mountain</div>
            <p className=" cardauthor  mb-1">
            -Author
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Mountain</div>
            <p className=" cardauthor  mb-1">
            -Author
            </p>
            </div>
     
            </div>
          </div>
          </div>
                    
          
         </div>

                 
         </div>
     <Footer/>
     </div>
  
     </>
 );

};

export default Recentlyadded;