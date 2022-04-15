import React from 'react';

import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
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
   
   
     
      autoplay: true,
      speed: 700,
      autoplaySpeed: 8000,
      cssEase: "linear",
      infinite: true,
      swipeToSlide: true,


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
                 <button  title="Search"  aria-label="Submit Search" className='brswsebton p-3'><div>Browse Resources</div></button>
                 </div>

                </div>
   

          </div>
       

        </div>
        
        <div className='recentlyCont flex '>
      
         <div className='recentCont pt-5 '>
                <div className='text-black recentContCont '>
                 
        <div>
           <h3  className=" pt-4 pl-4" style={{color:"#d33c3c",position:"absolute",zIndex:"4"}} >Featured Books</h3>
        <Slider {...settingsfeatured}>
            
            <div className=' featuredbox  relative'  >
              <div className='blurthis absolute  h-full' style={{backgroundImage: 'url(' + require('.//style/images/bg2.png') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
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
              <div className='blurthis absolute  h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
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
              <div className='blurthis absolute  h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
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
              <div className='blurthis absolute  h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
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
              <div className='blurthis absolute  h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
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
              <div className='blurthis absolute  h-full' style={{backgroundImage: 'url(' + require('.//style/images/harry.jpg') + ')',zIndex:"1",filter:'blur(90%)'}}>   </div>
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
            
            <div className="px-1 carddet phone:hidden tabletlg:block" style={{zIndex:"2"}}>
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
            
            <div className="px-1 carddet phone:hidden tabletlg:block  " style={{zIndex:"2"}}>
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
            
            <div className="px-1 carddet phone:hidden tabletlg:block" style={{zIndex:"2"}}>
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
            
            <div className="px-1 carddet phone:hidden tabletlg:block" style={{zIndex:"2"}}>
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
            
            <div className="px-1 carddet phone:hidden tabletlg:block" style={{zIndex:"2"}}>
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
            
            <div className="px-1 carddet phone:hidden tabletlg:block" style={{zIndex:"2"}}>
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
            
            <div className="px-1 carddet phone:hidden tabletlg:block " style={{zIndex:"2"}}>
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