import React from 'react';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


import "./style/browse.css";
import "./style/sidemenu.css";
import "./style/openbook.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Menu  from "./Menu.js";
import Topnav from "./Topnav";
import 'flowbite';
import { ReactDimmer } from "react-dimmer";
    

const Openbook= () => {
 return (
     <>
<div className='relative  flex '>
     <div className='w-full  bookdetailcontainer  '>
      <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1"}}>   </div>   
     <div className='maxwidthopen  flex-row flex  grid grid-cols-12 self-center'>
     <div className='bookimge py-6 tablet:py-6 desktop:py-8  col-span-12 desktop:col-span-2 tablet:col-span-4 '>
         <img className='openbookimage' src={require('.//style/images/harry.jpg')} alt="No Image Preview"/>
     </div>
     <div className='titledescription pb-2 tablet:py-4 desktop:py-8 col-span-12 desktop:col-span-7 tablet:col-span-8  px-6'>
         <h2 className='openbooktitle  flex phone:text-center tablet:text-left'>Harry Potter and the Sorcerer's Stone</h2>
         <h3 className='openbookauthor py-2'><span className='openbookclassname'>Author: </span> J.K. Rowling</h3>
          <div className='genrecircle inline-flex'>
                  <p className='openbookgenre genretext px-1'>Genre:</p>
                  <a className='openbookgenre '><p className='px-1'>Mystery</p></a>
                  <a className='openbookgenre px-1'><p className='px-1'>Magic</p></a>
                  <a className='openbookgenre px-1'><p className='px-1'>Fantasy</p></a>


         </div>
         <div className='   flex flex-row openbookbuttons'>
             <a className='px-2 my-4 mx-1'>Borrow</a> <a className='px-2 my-4   mx-1' ><FaRegBookmark/></a> <a className='px-2  my-4  mx-1'><FaRegHeart/></a>
         </div>
        <h4 className='openbooksummary mb-2 '><p className='openbookclassname'>Overview:</p> An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.</h4>

     </div>
     <div className='moredetails py-4 tablet:py-6 desktop:py-8  desktop:col-span-3  phone:col-span-12 flex flex-col desktop:items-center'>
         <div className='flex flex-col px-7 desktop:px-0'>
         <p><span className='openbookclassname'>Material type: &nbsp; </span>Book</p>
         <p><span className='openbookclassname'>Item type: &nbsp; </span>  Book</p>
         <p><span className='openbookclassname'>Literary Form: &nbsp; </span>  fiction</p>
         <p><span className='openbookclassname'>Publisher: &nbsp; </span>	Bloomsbury (UK)</p>
         <p><span className='openbookclassname'>Copyright date: &nbsp; </span>1997</p>
         <p><span className='openbookclassname'>ISBN: &nbsp; </span>  0-7475-3269-9</p>
         <p><span className='openbookclassname'>Call number: &nbsp;  </span>Q 121 G76 1984</p>
         <p><span className='openbookclassname'>Availability: &nbsp; </span>  Available</p>
       </div>  
     </div>

     </div>
     </div>   

</div>
  <div className='youmaylike mb-5'>
         <div className='flex recenthead mt-3 flex-row justify-between items-center'>
         <h3 className='mb-1   h2h'>Books you may like</h3>
     
         </div>
         <div className='w-full grid grid-row-2 desktop:grid-cols-6 laptop:grid-cols-6 tabletlg:grid-cols-4 tablet:grid-cols-3 phone:grid-cols-2 phone:gap-1 tablet:gap-1 tabletlg:gap-2 '>
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


         </div>
        </div>
     
     
     
     </>
 );

};

export default Openbook;