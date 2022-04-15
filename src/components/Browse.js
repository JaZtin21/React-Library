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
        
        
        
        <div className='recentlyCont  flex '>
      
         <div className='recentCont pt-3 addnav '>
                <div className='text-black recentContCont '>
                 
        <div>
           <h3  className=" pt-4 pl-4" style={{color:"#d33c3c",position:"absolute",zIndex:"4"}} >Random Books</h3>
        <Slider {...settingsfeatured}>
            
            <div className=' featuredbox  relative'  >
              <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/bg2.png') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
              <div className="inline-flex w-full h-full "  style={{zIndex:"2"}}>



                <a className='bookimagecontainerhome text-black justify-items-center block h-full' >

                <div className="flex pt-4 pl-4" style={{height:"20%"}} >
               
                </div>
                <div className="bookdescriptionhome  block pt-4 pb-3 mx-auto mb-0 "  style={{overflow:"auto"}} >
                  <h2>Harry potter and the sorcerer's stone</h2>
                  <h5 >-J.K Rowling</h5>
 <div className='genrecircle inline-flex'>
                  <p className='px-1'>Mystery</p>
                  <p className='px-1'>Magic</p>
                  <p className='px-1'>Fantasy</p>


                </div>



                </div>
                </a>


                <a className='bookdescriptioncontainerhome  flex' >

                <div className="bookimagehome  px-2 pt-2">
                  <div className="bookimagebox flex align-middle justify-items-center h-80  ">
                    
                    <img className="bookimg text-center mx-auto"  src={require('.//style/images/bg.png')} alt="No Image Preview" />
                  

                  </div>
           


                </div>

                </a>

            </div>
          </div>
                 <div className=' featuredbox  relative'  >
              <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
              <div className="inline-flex w-full h-full "  style={{zIndex:"2"}}>



                <a className='bookimagecontainerhome text-black justify-items-center block h-full' >

                <div className="flex pt-4 pl-4" style={{height:"20%"}} >
               
                </div>
                <div className="bookdescriptionhome  block pt-4 pb-3 mx-auto mb-0 "  style={{overflow:"auto"}} >
                  <h2>Harry potter and the sorcerer's stone</h2>
                  <h5 >-J.K Rowling</h5>

                <div className='genrecircle inline-flex'>
                  <p className='px-1'>Mystery</p>
                  <p className='px-1'>Magic</p>
                  <p className='px-1'>Fantasy</p>


                </div>




                </div>
                </a>


                <a className='bookdescriptioncontainerhome  flex' >

                <div className="bookimagehome  px-2 pt-2">
                  <div className="bookimagebox flex align-middle justify-items-center h-80  ">
                    
                    <img className="bookimg text-center mx-auto"  src={require('.//style/images/harry.jpg')} alt="No Image Preview" />
                  

                  </div>
           


                </div>

                </a>

            </div>
          </div>
                 <div className=' featuredbox  relative'  >
              <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
              <div className="inline-flex w-full h-full "  style={{zIndex:"2"}}>



                <a className='bookimagecontainerhome text-black justify-items-center block h-full' >

                <div className="flex pt-4 pl-4" style={{height:"20%"}} >
               
                </div>
                <div className="bookdescriptionhome  block pt-4 pb-3 mx-auto mb-0 "  style={{overflow:"auto"}} >
                  <h2>Harry potter and the sorcerer's stone</h2>
                  <h5 >-J.K Rowling</h5>

 <div className='genrecircle inline-flex'>
                  <p className='px-1'>Mystery</p>
                  <p className='px-1'>Magic</p>
                  <p className='px-1'>Fantasy</p>


                </div>


                </div>
                </a>


                <a className='bookdescriptioncontainerhome  flex' >

                <div className="bookimagehome  px-2 pt-2">
                  <div className="bookimagebox flex align-middle justify-items-center h-80  ">
                    
                    <img className="bookimg text-center mx-auto"  src={require('.//style/images/harry.jpg')} alt="No Image Preview" />
                  

                  </div>
           


                </div>

                </a>

            </div>
          </div>
                 <div className=' featuredbox  relative'  >
              <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
              <div className="inline-flex w-full h-full "  style={{zIndex:"2"}}>



                <a className='bookimagecontainerhome text-black justify-items-center block h-full' >

                <div className="flex pt-4 pl-4" style={{height:"20%"}} >
               
                </div>
                <div className="bookdescriptionhome  block pt-4 pb-3 mx-auto mb-0 "  style={{overflow:"auto"}} >
                  <h2>Harry potter and the sorcerer's stone</h2>
                  <h5 >-J.K Rowling</h5>
 <div className='genrecircle inline-flex'>
                  <p className='px-1'>Mystery</p>
                  <p className='px-1'>Magic</p>
                  <p className='px-1'>Fantasy</p>


                </div>



                </div>
                </a>


                <a className='bookdescriptioncontainerhome  flex' >

                <div className="bookimagehome  px-2 pt-2">
                  <div className="bookimagebox flex align-middle justify-items-center h-80  ">
                    
                    <img className="bookimg text-center mx-auto"  src={require('.//style/images/harry.jpg')} alt="No Image Preview" />
                  

                  </div>
           


                </div>

                </a>

            </div>
          </div>
                 <div className=' featuredbox  relative'  >
              <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
              <div className="inline-flex w-full h-full "  style={{zIndex:"2"}}>



                <a className='bookimagecontainerhome text-black justify-items-center block h-full' >

                <div className="flex pt-4 pl-4" style={{height:"20%"}} >
               
                </div>
                <div className="bookdescriptionhome  block pt-4 pb-3 mx-auto mb-0 "  style={{overflow:"auto"}} >
                  <h2>Harry potter and the sorcerer's stone</h2>
                  <h5 >-J.K Rowling</h5>

 <div className='genrecircle inline-flex'>
                  <p className='px-1'>Mystery</p>
                  <p className='px-1'>Magic</p>
                  <p className='px-1'>Fantasy</p>


                </div>


                </div>
                </a>


                <a className='bookdescriptioncontainerhome  flex' >

                <div className="bookimagehome  px-2 pt-2">
                  <div className="bookimagebox flex align-middle justify-items-center h-80  ">
                    
                    <img className="bookimg text-center mx-auto"  src={require('.//style/images/harry.jpg')} alt="No Image Preview" />
                  

                  </div>
           


                </div>

                </a>

            </div>
          </div>
                 <div className=' featuredbox  relative'  >
              <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
              <div className="inline-flex w-full h-full "  style={{zIndex:"2"}}>



                <a className='bookimagecontainerhome text-black justify-items-center block h-full' >

                <div className="flex pt-4 pl-4" style={{height:"20%"}} >
               
                </div>
                <div className="bookdescriptionhome  block pt-4 pb-3 mx-auto mb-0 "  style={{overflow:"auto"}} >
                  <h2>Harry potter and the sorcerer's stone</h2>
                  <h5 >J.K Rowling</h5>




                </div>
                </a>


                <a className='bookdescriptioncontainerhome  flex' >

                <div className="bookimagehome  px-2 pt-2">
                  <div className="bookimagebox flex  h-80  ">
                    
                    <img className="bookimg text-center mx-auto"  src={require('.//style/images/harry.jpg')} alt="No Image Preview" />
                  

                  </div>
           


                </div>

                </a>

            </div>
          </div>
              
          
        </Slider>
        </div>
         <div className='flex recenthead mt-3 flex-row justify-between items-center'>
         <h3 className='mb-1   h2h' >Recently Added</h3>
         <button className='seemorebutton flex items-center justify-between flex-row'><a className='mr-1' href='/recentlyadded'> View more</a><FaChevronRight/></button>
         </div>
         <div className='phone:px-1 desktop:px-0 w-full grid grid-row-2 desktop:grid-cols-6 laptop:grid-cols-6 tabletlg:grid-cols-4 tablet:grid-cols-3 phone:grid-cols-2 phone:gap-1 tablet:gap-1 tabletlg:gap-2 '>
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

                  <div className='flex recenthead  flex-row justify-between items-center'>
         <h3 className='mb-1 mt-2  h2h'>Most Liked</h3>
         <button className='seemorebutton flex items-center justify-between flex-row'><a className='mr-1' href='/mostliked'> View more</a><FaChevronRight/></button>
         </div>
         <div className=' phone:px-1 desktop:px-0 grid grid-row-2 desktop:grid-cols-6 laptop:grid-cols-6 tabletlg:grid-cols-4 tablet:grid-cols-3 phone:grid-cols-2 phone:gap-1 tablet:gap-1 tabletlg:gap-2'>
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