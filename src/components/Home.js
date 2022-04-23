import React from 'react';

import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { GiBlackBook } from "react-icons/gi";
import "./style/home.css";
import "./style/sidemenu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Menu  from "./Menu.js";
import 'flowbite';


const Home= () => {
   var settingsfeatured = {
      dots: true,
   
   
      slidesToShow: 2,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 6000,
      cssEase: "linear",
      infinite: true,
      swipeToSlide: true,

      responsive: [
        
   
        
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
  
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
       
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
           
          }
        }
      ]


    };
     var settings = {
      dots: false,
   
   
      slidesToShow: 6,
      autoplay: true,
      speed: 1000,
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
            slidesToShow: 4,
       
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
           
          }
        }
      ]
    };
    return (
        <>
        <div className='topnavcont phone:hidden laptop:block '> </div>

        <div className='navcont ' >
            <div className='navcontlist '>
            <div className='navcontul phone:py-3 tablet:py-5 laptop:py-6' >
            <div className='ml-4  phone:flex tablet:hidden '><Menu/></div>
            <ul className='phone:hidden tablet:flex'>
              <div className='margnav'>
               
                <li>
                    <a href="/"> Home </a>
                </li>
                <li>
                    <a href="/browse"> Browse </a>
                </li>
                <li>
                    <a href="/advancedsearch"> Advanced Search </a>
                </li>
                  <li>
                    <a href="studentlogin"> Login </a>
                </li>
              </div>
                 <div className='phone:hidden laptop:block'>
                <li className=' loginbtnnav '>
                    <a href=""> Welcome Jasper!  </a>
                    <button className='mx-1' type='button' id="dropdownDefault" data-dropdown-toggle="dropdown"  >< FaChevronDown/></button>
                    

                </li>
                </div>
            </ul>
            </div>
            </div>
        </div>
         <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute">
               <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                 <li>
         <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change Password</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
      </li>


    </ul>
     </div>
        <div className='searchCont flex '>
      
         <div className='centerCont '>
                <div className='centerContCont mt-11 mb-14'>
                    <h2 className='mb-4 h2h'><img className='logohome' src={require('.//style/images/logo.png')} />PUP Web Library</h2>
                   <div className=''>
                      <form className='relative'>
                        <input className='w-full tabletlg:py-3 phone:py-2 text-black searchfield' type="text"  name="keyword" placeholder="Search book..." required=""></input>
                        <button type="submit" title="Search"  aria-label="Submit Search" className='searchbtn tabletlg:px-4 phone:px-3'><div><FaSearch/></div></button>
                      </form>
                      <p className='mt-4'>Search for 1000 library resources composed of books and journals that can be found on the PUP CEA Library</p>
                   </div>


                


                 <div className='w-full flex browsebtncenter p-2 mt-5'> 
                 <a href='/browse'  className='brswsebton p-3'>Browse Resources</a>
                 </div>

                </div>
   

          </div>
       

        </div>
        <div className='librarydescription w-full py-14 '> 
        <div className='librarydesccontainer   phone:px-1 desktop:px-0 grid  phone:grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3' >
          <div className='librarydesc flex flex-row tabletlg:gap-3 phone:gap-1'>
            <div className='iconbox'>
              <p><BsFillBookmarkHeartFill/></p>

            </div>
            <div className='icondesc flex flex-col content-between '>
              <p className='icondesctitle'>Bookmark</p>
              <p className='icondescdesc'>Bookmark books that you like in the library</p>

            </div>


          </div>
                    <div className='librarydesc flex flex-row tabletlg:gap-3 phone:gap-1'>
            <div className='iconbox'>
              <p>< GiBookshelf/></p>

            </div>
                <div className='icondesc flex flex-col content-between '>
              <p className='icondesctitle'>Manage</p>
              <p className='icondescdesc'>Manage the library resources with admin access</p>

            </div>


          </div>
                    <div className='librarydesc flex flex-row tabletlg:gap-3 phone:gap-1'>
            <div className='iconbox'>
              <p><GiBlackBook/></p>

            </div>
             <div className='icondesc flex flex-col content-between '>
              <p className='icondesctitle'>Borrow</p>
              <p className='icondescdesc'>Borrow books using the library system</p>

            </div>


          </div>
  

        </div>
        </div>

        <div className='homefeaturedbox  pb-10 '>
          
          <div className='homefeaturedcont px-3 desktop:px-0 '>
            <h3 className='mb-5  mt-5  py-0 text-white text-center w-full flex justify-center items-center relative'><div className='absolute w-full linefeatured'></div> <span className='h2h featline'>Featured Books</span> </h3>
            
     
        <Slider {...settingsfeatured}>
            
                                
              <div className='insfeaturedBox flex relative   '>
  
                <div className='featuredimgBox'>
                   <img className="featuredImg" src={require('.//style/images/harry2.png')} alt="Mountain"/>

                </div>
                <div className='featuredcontBox relative h-full flex flex-col  laptop:mx-5 phone:mx-1 pl-2 '>
                      
           
                  <h4 className='featuredtitle'>Harry Potter and the Chamber of Secrets</h4>
                  <h4 className='featuredauthor'>-J.K. Rowling</h4>
          
                  <h4 className='featureddescript'>An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.</h4>
                </div>


              </div>
                                   
              <div className='insfeaturedBox flex relative  '>
  
                <div className='featuredimgBox'>
                   <img className="featuredImg" src={require('.//style/images/harry3.jpg')} alt="Mountain"/>

                </div>
                <div className='featuredcontBox relative h-full flex flex-col laptop:mx-5 phone:mx-1 pl-2'>
                      
           
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
              <div className='insfeaturedBox flex relative   '>
  
                <div className='featuredimgBox'>
                   <img className="featuredImg" src={require('.//style/images/harry2.png')} alt="Mountain"/>

                </div>
                <div className='featuredcontBox relative h-full flex flex-col  laptop:mx-5 phone:mx-1 pl-2'>
                      
           
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
                <div className='featuredcontBox relative h-full flex flex-col p-2 laptop:mx-5 phone:mx-5'>
                      
           
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
              <div className='insfeaturedBox flex relative   '>
  
                <div className='featuredimgBox'>
                   <img className="featuredImg" src={require('.//style/images/harry2.png')} alt="Mountain"/>

                </div>
                <div className='featuredcontBox relative h-full flex flex-col p-2 laptop:mx-5 phone:mx-5'>
                      
           
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
                <div className='featuredcontBox relative h-full flex flex-col p-2 laptop:mx-5 phone:mx-5'>
                      
           
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
        
        <div className='recentlyCont homerecent flex bgdark '>
      
         <div className='recentCont pt-5 '>
                <div className='text-black recentContCont '>
                 
        
         
         <div className='flex recenthead mt-3 flex-row justify-between items-center'>
         <h3 className='mb-1   h2h'>Recently Added</h3>
         <button className='seemorebutton flex items-center justify-between flex-row'><a href='/recentlyadded' className='mr-1'> View more</a><FaChevronRight/></button>
         </div>
        <Slider {...settings}>
             <div className='h-full tablet:px-1 phone:px-0.5'>
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
          <div className='h-full tablet:px-1 phone:px-0.5'>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry2.png') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry2.png')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet  " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Harry Potter and the Chamber of Secrets</div>
            <p className=" cardauthor  mb-1">
            -JK Rowling
            </p>
            </div>
     
            </div>
          </div>
             <div className='h-full tablet:px-1 phone:px-0.5'>
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
                     <div className='h-full tablet:px-1 phone:px-0.5'>
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
                      <div className='h-full tablet:px-1 phone:px-0.5'>
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

                     <div className='h-full tablet:px-1 phone:px-0.5'>
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
                      <div className='h-full tablet:px-1 phone:px-0.5'>
            <div className="overflow-hidden recentcard ">
                  <div className='blurthis absolute w-full h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry2.png') + ')',zIndex:"1"}}>   </div> 
            <div className='imagecont ' style={{zIndex:"2"}}>
              <img className=" imagecontcont" src={require('.//style/images/harry2.png')} alt="Mountain"/>
            </div>
            
            <div className="px-1 carddet  " style={{zIndex:"2"}}>
            <div className=" cardtitle ">Harry Potter and the Chamber of Secrets</div>
            <p className=" cardauthor  mb-1">
            -JK Rowling
            </p>
            </div>
     
            </div>
          </div>
                           
          
        </Slider>



                


                 

                </div>
   

          </div>
       

        </div>
        
        <Footer/>


        </>

    );
    

};

export default Home;