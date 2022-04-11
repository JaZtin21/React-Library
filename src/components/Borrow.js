import React from 'react';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./style/browse.css";
import "./style/sidemenu.css";
import "./style/bookmarks.css";
import "./style/borrow.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Menu  from "./Menu.js";
import Topnav from "./Topnav";
import 'flowbite';
import { ReactDimmer } from "react-dimmer";
    


const Borrow= () => {



   var settingsfeatured = {
      dots: true,
   
   
     
      autoplay: true,
      speed: 700,
      autoplaySpeed: 8000,
      cssEase: "linear",
      infinite: true,
      swipeToSlide: true,


    };
     var settings = {
      dots: false,
   
   
      slidesToShow: 5,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      cssEase: "linear",
      infinite: true,
      swipeToSlide: true,

      responsive: [
        
   
        
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
  
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
       
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
           
          }
        }
      ]
    };
    return (
        <>
        
        
        
        <div className='recentlyCont  flex '>
      
         <div className='recentCont pt-3 addnav '>
         <div className='text-black recenthead recentContCont '>
                 
         <div className='flex bookmarkshead  mt-3 mb-2 flex-row  items-center'>
         <a href='/borrow' style={{backgroundColor:'#a43033'}}  className='px-2 py-1'>Borrow Status</a>
         <a href='/requestedcopy' className=' px-2 py-1'>Requested copy</a>

         </div>
          <div className='flex  optionborrow w-full justify-end pb-2'>						
                          <select className='borrowstatusselect py-0   '>
                              <option selected>All</option>
                              <option value="1">Pending</option>
                              <option value="2">Confirmed</option>
                              <option value="3">Received</option>
                              <option value="3">Returned</option>
                         </select></div>

         <div className='  grid laptop:grid-cols-2 tabletlg:grid-cols-1 tablet:grid-cols-1 phone:grid-cols-1 gap-1 '>
            
            <p className='hidden laptop:col-span-2 phone:col-span-1 nodata px-3 pt-3 pb-10'>no data available</p>
       

            
          
             <div className='bookmarkcontainer text-white flex flex-row px-2 py-3 relative'>
             <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/bg2.png') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
            
            <div className='bookmarksimgcont relative  ' style={{zIndex:"2"}}>
              <img className=" " src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            <div className=' relative removeshadow text-white flex flex-col px-2'  style={{zIndex:"2"}}>
             <h4 className='removeunderline' >Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <h5>Author</h5>
             <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>
           </div>

           </div>
                     <div className='bookmarkcontainer text-white flex flex-row px-2 py-3 '>
            
            <div className='bookmarksimgcont '>
              <img className=" " src={require('.//style/images/bg.png')} alt="Mountain"/>
            </div>
            <div className=' removeshadow text-white flex flex-col px-2'>
             <h4 className='removeunderline' >Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <h5>Author</h5>
             <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>
           </div>

           </div>
                     <div className='bookmarkcontainer text-white flex flex-row px-2 py-3 '>
            
            <div className='bookmarksimgcont '>
              <img className=" " src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            <div className=' removeshadow text-white flex flex-col px-2'>
             <h4 className='removeunderline' >Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <h5>Author</h5>
             <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>
           </div>

           </div>
                     <div className='bookmarkcontainer text-white flex flex-row px-2 py-3 '>
            
            <div className='bookmarksimgcont '>
              <img className=" " src={require('.//style/images/bg2.png')} alt="Mountain"/>
            </div>
            <div className=' removeshadow text-white flex flex-col px-2'>
             <h4 className='removeunderline' >Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <h5>Author</h5>
             <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>
           </div>

           </div>
       
   
    
             
           
         </div>
       
         
       
         


                


                 

                </div>
   

          </div>
       

        </div>
        
   


        </>

    );
    

};

export default Borrow;