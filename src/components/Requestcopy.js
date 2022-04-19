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
    


const Requestcopy= () => {



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
         <a href='/borrow'  className='px-2 py-1'>Borrow Status</a>
         <a href='/requestedcopy'  style={{backgroundColor:'#a43033'}} className=' px-2 py-1'>Requested copy</a>

         </div>
          <div className='flex  optionborrow w-full justify-end pb-2'>						
                          <select className='borrowstatusselect py-0   '>
                              <option selected>All</option>
                              <option value="1">Pending</option>
                              <option value="2">Copy sent</option>
                 
                         </select></div>

         <div className='  grid laptop:grid-cols-2 tabletlg:grid-cols-1 tablet:grid-cols-1 phone:grid-cols-1 gap-1 '>
            
            <p className='hidden laptop:col-span-2 phone:col-span-1 nodata px-3 pt-3 pb-10'>no data available</p>
       

            
          

       
   
    
             
           
         </div>
       
         
       
         


                


                 

                </div>
   

          </div>
       

        </div>
        
   


        </>

    );
    

};

export default Requestcopy;