import React from 'react';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";
import "./style/browse.css";
import "./style/sidemenu.css";
import Menu  from "./Menu.js";
import 'flowbite';

const Topnav = () => {
 return (
     <>
     
        <div className='topnavcont2  '>
        <div className='navcont navcont2' >
            <div className='navcontlist2 '>
            <div className='navcontul2 ' >  
       

            <ul className='topnavmid topnavmid2'  >
           
                <div className=' namidfirst phone:flex' >
                 <Menu   />
                    


    
                <li className='namidlogo phone:hidden tabletlg:block'>
                    <a href="/"> <img className='logohome2' src={require('.//style/images/logo.png')} /> </a>
                </li>
                <li className='phone:hidden tablet:flex' >
                    <a href="/"> PUP WEB Library </a>
                </li>

                </div>
                <div className='searchbartop'>

                      <form className='relative flex w-full justify-end phone:mr-2 tablet:mr-1 tabletlg:mr-0 '>
                        <input className='w-full  searchfield2 text-black' type="text"  name="keyword" placeholder="Search book..." required=""></input>
                        <button type="submit" title="Search"  aria-label="Submit Search" className='searchbtn2 '><div><FaSearch/></div></button>
                      </form>


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
        </div>                     <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute">
               <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                 <li>
         <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change Password</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
      </li>


    </ul>
                  </div>
         </div>
     
     </>
 );

};

export default Topnav;