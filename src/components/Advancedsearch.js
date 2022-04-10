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

const Advancedsearch= () => {
 return (
     <>
     <div className='advancedsearchcont  '>
         <div className='relative advancedsearchcont2  w-full  pt-7 pb-5 px-1'>
             <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/bg2.png') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>

             <h1 className='advancetext' style={{zIndex:"2"}}> Advanced Search </h1>
             <div className='advancedbox relative '  style={{zIndex:"2"}}>
                 <form className='phone:mx-3 tablet:mx-5 py-5'>
                    
                    <div className='flex-row flex  grid grid-cols-12 gap-3'>
                    <div className="advform-group  py-2 px-3 flex flex-row  col-span-12 desktop:col-span-6 tablet:col-span-6 ">
						<label className='mr-2 '>Title:</label>
						<input type="text" className="form-control py-0 w-full px-0 " required="required" autoComplete="off"   ></input>
					</div>
                     <div className="advform-group  py-2 px-2 flex flex-row col-span-12 desktop:col-span-6 tablet:col-span-6 ">
						<label className='mr-2 '>Keyword:</label>
						<input type="text" className="form-control py-0 px-0 w-full " required="required" autoComplete="off"   ></input>
					</div>
                    </div>
                    <div className='flex-row flex mt-2 grid grid-cols-12 gap-3'>
                    <div className="advform-group  py-2 px-3 flex flex-row  col-span-12 desktop:col-span-3 tablet:col-span-4 ">
						<label className='mr-2 '>Author:</label>
						<input type="text" className="form-control py-0 w-full px-0 " required="required" autoComplete="off"   ></input>
					</div>
                     <div className="advform-group  py-2 px-2 flex flex-row col-span-6 desktop:col-span-3 tablet:col-span-4 ">
						<label className='mr-2 '>Publisher:</label>
						<input type="text" className="form-control py-0 px-0 w-full " required="required" autoComplete="off"   ></input>
					</div>
                    <div className="advform-group  py-2 px-3 flex flex-row  col-span-6 desktop:col-span-3 tablet:col-span-4 ">
						<label className='mr-2 whitespace-nowrap '>Literary Form:</label>
						 <select className='itemtypeselect py-0 px-0  w-full'>
                              <option selected>All</option>
                              <option value="1">Fiction</option>
                              <option value="2">Non-fiction</option>
                       
                         </select>
					</div>
                    <div className="advform-group  py-2 px-2 flex flex-row col-span-12 desktop:col-span-3 tablet:col-span-12 ">
						<label className='mr-2 '>ISBN:</label>
						<input type="text" className="form-control py-0 px-0 w-full " required="required" autoComplete="off"   ></input>
					</div>
                    </div>
                    <div className='flex-row flex mt-2 grid grid-cols-12 gap-3'>
                    <div className="advform-group  py-2 px-3 flex flex-row  col-span-12 desktop:col-span-4 tablet:col-span-6 ">
						<label className='mr-2 whitespace-nowrap '>Item Type:</label>
						 <select className='itemtypeselect py-0 w-full'>
                              <option selected>All</option>
                              <option value="1">Book</option>
                              <option value="2">News Paper</option>
                              <option value="3">Theses and Dissertation</option>
                              <option value="3">Article</option>
                         </select>
					</div>
                     <div className="advform-group  py-2 px-2 flex flex-row col-span-12 desktop:col-span-8 tablet:col-span-6 ">
						<label className='mr-2 whitespace-nowrap '>Publication Date:</label>
						<input type="date" className="form-control py-0 px-0 w-full " required="required" autoComplete="off"   ></input>
				        <label className='mr-2 whitespace-nowrap '>-</label>
                        <input type="date" className="form-control py-0 px-0 w-full " required="required" autoComplete="off"   ></input>
                
                	</div>
                  

                    </div>

                    <p className='mt-7 '>Genre/Subject:</p>
                    <div className=" mt-2 flex  flex-row w-full flex-wrap">
					
                    <div className='genrebox flex-wrap mr-2 my-1 px-2 py-1'><p className=''>Adventure</p></div>
                    <div className='genrebox flex-wrap  mr-2 my-1 px-2 py-1'><p className=''>Astronomy</p></div>
                     <div className='genrebox flex-wrap  mr-2 my-1 px-2 py-1'><p className=''>Biology</p></div>
                    <div className='genrebox flex-wrap  mr-2 my-1 px-2 py-1'><p className=''>Comedy</p></div>
                    <div className='genrebox flex-wrap  mr-2 my-1 px-2 py-1'><p className=''>Fantasy</p></div>
                    <div className='genrebox flex-wrap  mr-2 my-1 px-2 py-1'><p className=''>Horror</p></div>
                    <div className='genrebox flex-wrap  mr-2 my-1 px-2 py-1'><p className=''>Physics</p></div>
                    <div className='genrebox flex-wrap  mr-2 my-1 px-2 py-1'><p className=''>Science Fiction</p></div>

                	</div>
                    <div className='flex flex-row justify-between items-center mt-5 '>
                    <div className="advform-group  py-2 px-3 flex flex-row mr-4">
						<label className='mr-2 whitespace-nowrap '>Sort:</label>
						 <select className='itemtypeselect py-0  w-full'>
                              <option selected>Default</option>
                              <option value="3">Latest</option>
                              <option value="3">Oldest</option>
                              <option value="1">Publish Date: Ascending</option>
                              <option value="2">Publish Date: Descending</option>
                              <option value="3">Acquisition Date: Ascending</option>
                              <option value="3">Acquisition Date: Descending</option>
                       
                         </select>
					</div>
                        
                    <button type="submit" title="Search"  aria-label="Submit Search" className='advsubmitbtn flex  items-center py-2 px-3'><div className='flex flex-row items-center'><div><FaSearch/></div><p className='ml-2'>Search</p></div></button>
                   </div>
                 </form>


             </div>

             <h1 className='advancetext mt-5' style={{zIndex:"2"}}> Search Result </h1>
           <div  style={{zIndex:"2"}} className='searchresultcont w-full grid grid-row-2 desktop:grid-cols-6 laptop:grid-cols-6 tabletlg:grid-cols-4 tablet:grid-cols-3 phone:grid-cols-2 phone:gap-1 tablet:gap-1 tabletlg:gap-2 '>
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

export default Advancedsearch;