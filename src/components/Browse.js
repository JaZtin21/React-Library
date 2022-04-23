import React from 'react';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./style/browse.css";
import "./style/sidemenu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Menu  from "./Menu.js";
import Topnav from "./Topnav";
import 'flowbite';
import { ReactDimmer } from "react-dimmer";
    


const Browse= () => {



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
        
        
        <div className='relative flex flex-col randcontainer'>

        
        <div className='phone:mx-1 laptop:mx-0 slidcont laptop:pt-10 phone:pt-5 px-1'>
           
        <Slider {...settingsfeatured}>
         
                     
              <div className='insfeaturedBox flex relative  '>
  
                <div className='featuredimgBox'>
                   <img className="featuredImg" src={require('.//style/images/harry2.png')} alt="Mountain"/>

                </div>
                <div className='featuredcontBox relative h-full flex flex-col p-2'>
                      
           
                  <h4 className='featuredtitle'>Harry Potter and the Chamber of Secrets</h4>
                  <h4 className='featuredauthor'>-J.K. Rowling</h4>
                  <div className='tablet:flex phone:hidden flex-row featuredgenre items-center '>
                    <p className='featuredauthor' >Genre: </p>
                    <p className='genrefeatured'>mystery</p>
                    <p className='genrefeatured'>magicy</p>
                    <p className='genrefeatured'>fantasy</p>


                  </div>
                  <h4 className='featureddescript'>An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.</h4>
                </div>


              </div>
                            <div className='insfeaturedBox flex relative  '>
 
                <div className='featuredimgBox'>
                   <img className="featuredImg" src={require('.//style/images/harry3.jpg')} alt="Mountain"/>

                </div>
                <div className='featuredcontBox relative h-full flex flex-col p-2'>
                      
           
                  <h4 className='featuredtitle'>Harry Potter and the Chamber of Secrets</h4>
                  <h4 className='featuredauthor'>-J.K. Rowling</h4>
                           <div className='tablet:flex phone:hidden flex-row featuredgenre items-center '>
                    <p className='featuredauthor' >Genre: </p>
                    <p className='genrefeatured'>mystery</p>
                    <p className='genrefeatured'>magicy</p>
                    <p className='genrefeatured'>fantasy</p>


                  </div>
                  <h4 className='featureddescript'>An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.</h4>
                </div>


              </div>

              <div className='insfeaturedBox flex relative  '>

                <div className='featuredimgBox'>
                   <img className="featuredImg" src={require('.//style/images/harry2.png')} alt="Mountain"/>

                </div>
                <div className='featuredcontBox relative h-full flex flex-col p-2'>
                      
           
                  <h4 className='featuredtitle'>Harry Potter and the Chamber of Secrets</h4>
                  <h4 className='featuredauthor'>-J.K. Rowling</h4>
                           <div className='tablet:flex phone:hidden flex-row featuredgenre items-center '>
                    <p className='featuredauthor' >Genre: </p>
                    <p className='genrefeatured'>mystery</p>
                    <p className='genrefeatured'>magicy</p>
                    <p className='genrefeatured'>fantasy</p>


                  </div>
                  <h4 className='featureddescript'>An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.</h4>
                </div>


              </div>
                            <div className='insfeaturedBox flex relative  '>
  
                <div className='featuredimgBox'>
                   <img className="featuredImg" src={require('.//style/images/harry3.jpg')} alt="Mountain"/>

                </div>
                <div className='featuredcontBox relative h-full flex flex-col p-2'>
                      
           
                  <h4 className='featuredtitle'>Harry Potter and the Chamber of Secrets</h4>
                  <h4 className='featuredauthor'>-J.K. Rowling</h4>
                           <div className='tablet:flex phone:hidden flex-row featuredgenre items-center '>
                    <p className='featuredauthor' >Genre: </p>
                    <p className='genrefeatured'>mystery</p>
                    <p className='genrefeatured'>magicy</p>
                    <p className='genrefeatured'>fantasy</p>


                  </div>
                  <h4 className='featureddescript'>An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.</h4>
                </div>


              </div>


                       
            
 
              
          
        </Slider>
        </div>
        </div>
                <div className='recentlyCont  flex '>
      
         <div className='recentCont mt-1 addnav '>
                <div className='text-black recentContCont '>
         <div className='flex recenthead mt-3 flex-row justify-between items-center'>
         <h3 className='mb-1   h2h' >Recently Added</h3>
         <button className='seemorebutton flex items-center justify-between flex-row'><a className='mr-1' href='/recentlyadded'> View more</a><FaChevronRight/></button>
         </div>
         <div className='phone:px-1 desktop:px-0 w-full grid grid-row-2 desktop:grid-cols-6 laptop:grid-cols-6 tabletlg:grid-cols-4 tablet:grid-cols-4 phone:grid-cols-3 phone:gap-1 tablet:gap-1 tabletlg:gap-2 '>
           <div>         
            <div className='h-full '>
            <div className="overflow-hidden recentcard ">
                
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
          <div className="divider"><span></span><span><FaChevronDown/></span><span></span></div>

                  <div className='flex recenthead  flex-row justify-between items-center'>
         <h3 className='mb-1 mt-2  h2h'>Most Liked</h3>
         <button className='seemorebutton flex items-center justify-between flex-row'><a className='mr-1' href='/mostliked'> View more</a><FaChevronRight/></button>
         </div>
         <div className=' phone:px-1 desktop:px-0 grid grid-row-2 desktop:grid-cols-6 laptop:grid-cols-6 tabletlg:grid-cols-4 tablet:grid-cols-4 phone:grid-cols-3 phone:gap-1 tablet:gap-1 tabletlg:gap-2'>
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
        <div className="divider"><span></span><span><FaChevronDown/></span><span></span></div>
         <div className='flex recenthead mt-2 flex-row justify-between items-center'>
         <h3 className='mb-1   h2h'>Recent Journals</h3>
         <button className='seemorebutton flex items-center justify-between flex-row'><a className='mr-1'> View more</a><FaChevronRight/></button>
         </div>
         <div className='phone:px-1 desktop:px-0 grid laptop:grid-cols-2 tabletlg:grid-cols-1 tablet:grid-cols-1 phone:grid-cols-1 gap-3 mb-5'>
           <div className='journalcontainer text-white flex flex-col p-3'>
             <h4 className='text-justify align-middle'>Title</h4>
             <p>Date Published: July 2019</p>
             <h5>Author , 2nd Author </h5>
             <h6 className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>


           </div>
             <div className='journalcontainer text-white flex flex-col p-3'>
             <h4>Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <p>Date Published</p>
             <h5>Author</h5>
             <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>


           </div>
              <div className='journalcontainer text-white flex flex-col p-3'>
             <h4>Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <p>Date Published</p>
             <h5>Author</h5>
             <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>


           </div>
                     <div className='journalcontainer text-white flex flex-col p-3'>
             <h4>Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <p>Date Published</p>
             <h5>Author</h5>
             <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>


           </div>
                     <div className='journalcontainer text-white flex flex-col p-3'>
             <h4>Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <p>Date Published</p>
             <h5>Author</h5>
             <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>


           </div>
                     <div className='journalcontainer text-white flex flex-col p-3'>
             <h4>Now I Will make the title of this journal to two lines and i hope it works well and if it exceeds three lines then the text will be clipped by the css</h4>
             <p>Date Published</p>
             <h5>Author</h5>
             <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h6>


           </div>

           
         </div>
       
         
       
         


                


                 

                </div>
   

          </div>
       

        </div>
        
   


        </>

    );
    

};

export default Browse;