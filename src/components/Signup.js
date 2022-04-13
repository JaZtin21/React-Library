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

const Signup= () => {
 
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
      
         <div className='w-full mb-5'>
                <div className='logincont mb-9 phone:px-4 tabletlg:px-0'>
                <form className=' signupform p-4 '>
          

				<div className="modal-header2 pb-4 flex items-center justify-center">				
					<h4 className="modal-title">Signup</h4>			
				</div>
				<div className="modal-body bg-light text-dark py-3">
                    <div class="grid tablet:grid-cols-2 phone:grid-cols-1 gap-2">
                    <div className="form-group flex flex-col">
						<label className=' '>First Name:</label>
						<input type="text" className="form-control my-1  " required="required" autoComplete="off"   ></input>
					</div>

                    <div className="form-group flex flex-col">
						<label className=' '>Last Name:</label>
						<input type="text" className="form-control my-1  " required="required" autoComplete="off"   ></input>
					</div>
                  </div>				
					<div className="form-group my-3 flex flex-col">
						<label className=' '>Email:</label>
						<input type="email" className="form-control my-1  " required="required" autoComplete="off"   ></input>
					</div>
                    <div className="form-group my-3 flex flex-col">
						<label className=' '>Student Number:</label>
						<input type="text" className="form-control my-1  " required="required" autoComplete="off"   ></input>
					</div>
                    <div className="form-group my-3 flex flex-col">
						<label className=' '>Department:</label>
						<input type="text" className="form-control my-1  " required="required" autoComplete="off"   ></input>
					</div>
                    <div className="form-group my-3 flex flex-col">
						<label className=''>Password:</label>
						<input type="password" className="form-control my-1 " required="required" autoComplete="off"   ></input>
                       
					</div>
                    
					
					
				</div>
				<div className="modal-footer justify-content-center ">
					
					<input type="submit" className="btn btn-light formsubmitbtn p-2"   value="Signup" ></input>
                    <div className='flex flex-col justify-center w-full my-3'>
                      <p className='flex flex-row justify-center w-full items-center '> <a href='/studentlogin' className='mx-1 px-3 py-1 mt-1 loginadminbtn flex flex-row items-center'><span className='mr-2'>Login as Student </span> <FaChevronRight/></a></p>
                    </div>
               
				</div>
            
                </form>



                </div>
   

          </div>
       

        </div>
        

        
       

        </>

    );
    

};

export default Signup;