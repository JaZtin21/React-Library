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
       

            
          
             <div className='bookmarkcontainer text-white flex flex-row px-2  relative'>
             <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/bg2.png') + ')',backgroundSize:'cover',backgroundRepeat:'no-repeat',zIndex:'1'}}>   </div>
            
            <div className='bookmarksimgcont relative  my-3' style={{zIndex:"2"}}>
              <img className=" " src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            <div className=' relative removeshadow text-white flex flex-col px-2'  style={{zIndex:"2"}}>
             <div className='statusbar w-full flex  flex-row-reverse'>
              <div className='relative'>
               <h5 className=' stattext flex px-3 flex-1  absolute'>Copy Sent</h5>
               <svg width="150" height="24">
               <path d="m 1 0 c 6 2 24 -1 30 11 c 3 5 5 13 13 13 h 105 V 0" fill="#3da450"  stroke="none" strokeWidth="1" />
  
              </svg>

             </div>

              </div>
             <h4 className='removeunderline' >Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <h5 className='pt-0'>-Author</h5>
             <h6><span className='makethisbold mr-2'>Received Date:</span> January 11, 2022 </h6>
             <h6><span className='makethisbold mr-2'>Return Date:</span>  February 11, 2022 </h6>
           </div>

           </div>
                <div className='bookmarkcontainer text-white flex flex-row px-2  relative'>
             <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry2.png') + ')',backgroundSize:'cover',backgroundRepeat:'no-repeat',zIndex:'0'}}>   </div>
            
            <div className='bookmarksimgcont relative  my-3' style={{zIndex:"2"}}>
              <img className=" " src={require('.//style/images/harry2.png')} alt="Mountain"/>
            </div>
            <div className=' relative removeshadow text-white flex flex-col px-2'  style={{zIndex:"2"}}>
             <div className='statusbar w-full flex  flex-row-reverse'>
              <div className='relative'>
               <h5 className=' stattext flex px-3 flex-1  absolute'>Pending</h5>
               <svg width="150" height="24">
               <path d="m 1 0 c 6 2 24 -1 30 11 c 3 5 5 13 13 13 h 105 V 0" fill="#A43033"  stroke="none" strokeWidth="1" />
  
              </svg>

             </div>

              </div>
             <h4 className='removeunderline' >Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <h5 className='pt-0'>-Author</h5>
             <h6><span className='makethisbold mr-2'>Received Date:</span> January 11, 2022 </h6>
             <h6><span className='makethisbold mr-2'>Return Date:</span>  February 11, 2022 </h6>
           </div>

           </div>
             <div className='bookmarkcontainer text-white flex flex-row px-2  relative'>
             <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',backgroundSize:'cover',backgroundRepeat:'no-repeat',zIndex:'0'}}>   </div>
            
            <div className='bookmarksimgcont relative  my-3' style={{zIndex:"2"}}>
              <img className=" " src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            <div className=' relative removeshadow text-white flex flex-col px-2'  style={{zIndex:"2"}}>
             <div className='statusbar w-full flex  flex-row-reverse'>
              <div className='relative'>
               <h5 className=' stattext flex px-3 flex-1  absolute'>Confirmed</h5>
               <svg width="150" height="24">
               <path d="m 1 0 c 6 2 21 2 26 14 c 4 7 4 10 13 10 h 142 v -24" fill="#A43033"  stroke="none" strokeWidth="1" />
  
              </svg>

             </div>

              </div>
             <h4 className='removeunderline' >Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <h5 className='pt-0'>-Author</h5>
             <h6><span className='makethisbold mr-2'>Received Date:</span> January 11, 2022 </h6>
             <h6><span className='makethisbold mr-2'>Return Date:</span>  February 11, 2022 </h6>
           </div>

           </div>
             <div className='bookmarkcontainer text-white flex flex-row px-2  relative'>
             <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/bg2.png') + ')',backgroundSize:'cover',backgroundRepeat:'no-repeat',zIndex:'0'}}>   </div>
            
            <div className='bookmarksimgcont relative  my-3' style={{zIndex:"2"}}>
              <img className=" " src={require('.//style/images/harry.jpg')} alt="Mountain"/>
            </div>
            <div className=' relative removeshadow text-white flex flex-col px-2'  style={{zIndex:"2"}}>
             <div className='statusbar w-full flex  flex-row-reverse'>
              <div className='relative'>
               <h5 className=' stattext flex px-3 flex-1  absolute'>Confirmed</h5>
               <svg width="150" height="24">
               <path d="m 1 0 c 6 2 21 2 26 14 c 4 7 4 10 13 10 h 142 v -24" fill="#A43033"  stroke="none" strokeWidth="1" />
  
              </svg>

             </div>

              </div>
             <h4 className='removeunderline' >Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <h5 className='pt-0'>-Author</h5>
             <h6><span className='makethisbold mr-2'>Received Date:</span> January 11, 2022 </h6>
             <h6><span className='makethisbold mr-2'>Return Date:</span>  February 11, 2022 </h6>
           </div>

           </div>
       
   
    
             
           
         </div>
       
         
       
         


                


                 

                </div>
   

          </div>
       

        </div>
        
   


        </>

    );
    

};

export default Requestcopy;