import React from 'react';

import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "./style/home.css";
import "./style/form.css";
import "./style/sidemenu.css";
import Footer from "./Footer";
import Menu  from "./Menu.js";

const Studentlogin= () => {
 
    return (
        <>
        <div className='topnavcont phone:hidden laptop:block '> </div>

        <div className='navcont ' >
            <div className='navcontlist '>
                 
            <div className='navcontul phone:py-3 tablet:py-5 laptop:py-6' >
            
            <ul className='phone:hidden tablet:flex flex flex-row items-center'>
          
                 <div className='margnav'>
               
    
              </div>
       
            </ul>
            </div>
            </div>
        </div>
        <div className='logincontfirst flex ' >
      
         <div className='w-full '>
                <div className='logincont my-9'>
                <form className='loginform p-4'>
          

				<div className="modal-header pb-4 flex items-center justify-center">				
					<h4 className="modal-title">Student Login</h4>			
				</div>
				<div className="modal-body bg-light text-dark py-3">				
					<div className="form-group my-3 flex flex-col">
						<label className=' '>Email:</label>
						<input type="text" className="form-control my-1  " required="required" autoComplete="off"   ></input>
					</div>
                    <div className="form-group my-3 flex flex-col">
						<label className=''>Password:</label>
						<input type="password" className="form-control my-1 " required="required" autoComplete="off"   ></input>
                        <p className='forgottext'>Forgot Password?</p>
					</div>
                    
					
					
				</div>
					<div className="modal-footer justify-content-center ">
					
					<input type="submit" className="btn btn-light formsubmitbtn p-2"   value="Login" ></input>
                    <div className='flex flex-col justify-center w-full my-3'>
                    <p className='flex flex-row justify-center w-full items-center'> No account yet? <a href='/signup' className='mx-1 underline'>Signup here</a></p>
                     <p className='flex flex-row justify-center w-full items-center'> or</p>
                      <p className='flex flex-row justify-center w-full items-center '> <a href='/adminlogin' className='mx-1 px-3 py-1 mt-1 loginadminbtn  flex flex-row items-center'><span className='mr-2'>Login as Admin</span> <FaChevronRight/></a></p>
                    </div>
               
				</div>
            
                </form>



                </div>
   

          </div>
       

        </div>
        

        
       

        </>

    );
    

};

export default Studentlogin;