import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { ReactDimmer } from "react-dimmer";
import { FaBars } from "react-icons/fa";
import "./style/sidemenu.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {

  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };
    

   return (
     <>
     <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
    />
    <div className='fabar phone:block mr-2 ' onClick={handleMenu} >< GiHamburgerMenu/></div>
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}` }>
    <div className='menuheader py-4 ' style={{backgroundImage: 'url(' + require('.//style/images/bg.png') + ')'}}  onClick={handleMenu} ><  FaChevronLeft/> PUP WEB Library</div>
    <ul className='mt-3 sidemenus flex flex-col ml-2'>
      <li className='sidemenu py-4'>
        <a href='/'><h2>Home</h2></a>
      </li>
      <li className='sidemenu py-4'>
         <a  href='/browse'><h2>Browse</h2></a>
      </li>
       <li className='sidemenu py-4'>
         <a  href='/advancedsearch'><h2>Advanced Search</h2></a>
      </li>
       <li className='sidemenu py-4'>
        <a href='/bookmarks'> <h2>Bookmarks</h2></a>
      </li>
       <li className='sidemenu py-4'>
        <a href='/borrow'> <h2>Borrow </h2></a>
      </li>
      <li className='sidemenu py-4'>
        <a href='/addbook'> <h2>Manage Books </h2></a>
      </li>
       <li className='sidemenu py-4'>
        <a href='/changepassword'> <h2>Change Password</h2></a>
      </li>
       <li className='sidemenu py-4'>
        <a href='/logout'> <h2>Logout</h2></a>
      </li>
      
    </ul>

     
    </div>
     
     </>
 );



};



export default Menu;