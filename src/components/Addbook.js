import React, { useState, useCallback, useRef } from "react";

import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import Uploadimgbtn from "./Uploadimgbtn";

import "./style/browse.css";
import "./style/sidemenu.css";
import "./style/openbook.css";
import "./style/addbook.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Menu  from "./Menu.js";
import Topnav from "./Topnav";
import 'flowbite';
import { ReactDimmer } from "react-dimmer";
   
import Select from 'react-select';
import Creatable, { useCreatable } from 'react-select/creatable';





const Addbook= () => {

const [materialValue, setmaterialValue] = useState();
  const [materialOptions, setmaterialOptions] = useState([
  { value: 'books', label: 'books' },
  { value: 'newspaper', label: 'Newspapers' },
  { value: 'theses and dissertation', label: 'TheseTheseTheses and Dissertation' },
  ]);

  const materialhandleChange = useCallback((inputValue) => setmaterialValue(inputValue), []);console.log(materialValue);

  const materialhandleCreate = useCallback(
    (inputValue) => {
      const newValue = { materialValue: inputValue.toLowerCase(), label: inputValue };
      setmaterialOptions([...materialOptions,  newValue]);
      setmaterialValue(newValue);
    },
    [materialOptions]
  );

  const [seriesValue, setseriesValue] = useState();
  const [seriesOptions, setseriesOptions] = useState([
  { value: 'harry potter', label: 'harry potter' },
  { value: 'newspaper', label: 'Newspapers' },
  { value: 'theses and dissertation', label: 'TheseTheseTheses and Dissertation' },
  ]);

  const serieshandleChange = useCallback((inputValue) => setseriesValue(inputValue), []);console.log(seriesValue);

  const serieshandleCreate = useCallback(
    (inputValue) => {
      const newValue = { seriesValue: inputValue.toLowerCase(), label: inputValue };
      setseriesOptions([...seriesOptions,  newValue]);
      setseriesValue(newValue);
    },
    [seriesOptions]
  );

  const [genreValue, setgenreValue] = useState();
  const [genreOptions, setgenreOptions] = useState([
  { value: 'music', label: 'music' },
  { value: 'science', label: 'science' },
  { value: 'adventure', label: 'adventure' },
  ]);

  const genrehandleChange = useCallback((inputValue) => setgenreValue(inputValue), []);console.log(genreValue);

  
  const [authorValue, setauthorValue] = useState();
  const [authorOptions, setauthorOptions] = useState([
  { value: 'J.K Rowling', label: 'J.K Rowling' },
  { value: 'Albert', label: 'Albert' },
  { value: 'adventure', label: 'adventure' },
  ]);

  const authorhandleChange = useCallback((inputValue) => setauthorValue(inputValue), []);console.log(authorValue);


  
  const [literaryValue, setliteraryValue] = useState();
  const [literaryOptions, setliteraryOptions] = useState([
  { value: 'fiction', label: 'fiction' },
  { value: 'non-fiction', label: 'non-fiction' },
  
  ]);

  

  const literaryhandleChange = useCallback((inputValue) => setliteraryValue(inputValue), []);console.log(materialValue);

  const literaryhandleCreate = useCallback(
    (inputValue) => {
      const newValue = { literaryValue: inputValue.toLowerCase(), label: inputValue };
      setliteraryOptions([...literaryOptions, newValue]);
      setliteraryValue(newValue);
    },
    [literaryOptions]
  );

  const availabilityOptions = [
  { value: 'available', label: 'available' },
  { value: 'not available', label: 'not available' },
 
]

  
 const customStyles = {
 control: (base, state) => ({
    ...base,
    /*border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
       border: state.isFocused ? 0 : 0
    }*/
    backgroundColor:'rgba(255, 255, 255, 0.901)',
    margin:'0',
   
     minHeight: '30px',
      height: '30px',
      maxWidth:'250px',
     
   
}),
valueContainer: (provided, state) => ({
      ...provided,
      height: '30px',
      padding: '0 5px',
      
     

    }),
    
    input: (provided, state) => ({
      ...provided,
      margin: '0px',
      
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '30px',
      maxWidth:'270px',
    }),

    menuList: base => ({
    ...base,
    minHeight: "10px" ,
    
    
    padding:'0'
    
     }),
     option: styles => ({ ...styles,                 
         
            lineHeight: '20px',
          
      }) 

}
 
 const customStyles2 = {
 control: (base, state) => ({
    ...base,
    /*border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
       border: state.isFocused ? 0 : 0
    }*/
    backgroundColor:'rgba(255, 255, 255, 0.901)',
    margin:'0',
   
     minHeight: '41px',
     
      maxWidth:'100%',
     
   
}),
valueContainer: (provided, state) => ({
      ...provided,
      
      padding: '0 5px',
      
     

    }),
    
    input: (provided, state) => ({
      ...provided,
      margin: '0px',
      
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
     
      maxWidth:'100%',
    }),

    menuList: base => ({
    ...base,
    minHeight: "10px" ,
    
    
    padding:'0'
    
     }),
     option: styles => ({ ...styles,                 
         
            lineHeight: '20px',
          
      }) 

}
const [picture, setPicture] = useState(require('.//style/images/harry.jpg'));
  const [imgData, setImgData] = useState(require('.//style/images/harry.jpg'));
  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
const [inputVal, setInputVal] =useState("")
  const inputRef = useRef(null)



  const handleInputHeight = () => {
const scrollHeight = inputRef.current.scrollHeight;
inputRef.current.style.height = scrollHeight + "px";
 };

 const handleInputChange = () => {
  setInputVal(inputRef.current.value)
  handleInputHeight()
 }

 const [inputVal2, setInputVal2] =useState("")
  const inputRef2 = useRef(null)



  const handleInputHeight2 = () => {
const scrollHeight2 = inputRef2.current.scrollHeight;
inputRef2.current.style.height = scrollHeight2 + "px";
 };

 const handleInputChange2 = () => {
  setInputVal2(inputRef2.current.value)
  handleInputHeight2()
 }





 return (
     <>
<div className='relative  flex '>
     <div className='w-full pb-12 bookdetailcontainer  '>
      <div className='blurthis absolute w-full h-full' style={{backgroundImage: `url(${imgData})`,zIndex:"1"}}>   </div>   
     <form>
     <div className='maxwidthopen  flex-row flex  grid grid-cols-12 self-center'>
       
     <div className='bookimge justify-start laptop:my-8 phone:my-0 flex flex-col items-center flex-wrap py-6 tablet:py-6 desktop:py-8  col-span-12 desktop:col-span-2 tablet:col-span-4 '>
         <img className='openbookimage self-center' src={imgData} alt="No Image Preview"/>
       
      <div className='inputfilebtn mt-2 self-center'>
      <label className='inputfilebtnbtn'  htmlFor="formId">
         
         <input name="uploadedimg" onChange={onChangePicture} className='' type="file" id="formId" hidden />

         <p className='flex flex-row items-center gap-2'><FaFileImage/> Select File</p>
          
     </label>
     </div>

     </div>
     <div className='titledescription laptop:my-8 phone:my-0 pb-10 tablet:py-4 desktop:py-8 col-span-12 desktop:col-span-7 tablet:col-span-8  px-6'>

          <div className="form-groupaddbook flex flex-col ">
						<label className='addbooklabel'>Title:</label>
						<textarea rows="1" className='' ref={inputRef2} value={inputVal2} onChange={handleInputChange2}   onKeyDown={(e) => { if (e.key === "Enter") {
            handleInputHeight2(e);
            inputRef2.current.style.height = "40px";
          }
        }}
     />
					</div>
           <div className="form-groupaddbook mt-2 flex flex-col ">
						<label className='addbooklabel'>Author: </label>
												 <Creatable

         isClearable
        value={authorValue}
        options={authorOptions}
        onChange={authorhandleChange}
       
        isMulti
  

         

        classNamePrefix="materialtype"
        styles={customStyles2}

      />
					</div>
                <div className="form-groupaddbook mt-2 flex flex-col ">
						<label className='addbooklabel'>Genre: </label>
						 <Creatable

         isClearable
        value={genreValue}
        options={genreOptions}
        onChange={genrehandleChange}
       
        isMulti
  

         

        classNamePrefix="materialtype"
        styles={customStyles2}

      />
					</div>
                <div className="form-groupaddbook mt-2 mb-3 flex flex-col ">
						<label className='addbooklabel'>Description:</label>
						 <textarea rows="1" className='textareadesc' ref={inputRef} value={inputVal} onChange={handleInputChange}   onKeyDown={(e) => { if (e.key === "Enter") {
            handleInputHeight(e);
            inputRef.current.style.height = "40px";
          }
        }}
     />
					</div>

           <div className="form-groupaddbook mt-2 mb-3 flex flex-col ">
						<label className='addbooklabel'>Series:</label>
						 						 <Creatable

         isClearable
        value={seriesValue}
        options={seriesOptions}
        onChange={serieshandleChange}

        classNamePrefix="materialtype"
        styles={customStyles2}

      />
					</div>

           <div className="form-groupaddbook mt-2  w-full grid grid-cols-2 gap-2">
             <div>
						<label className='addbooklabel'>Volume: </label>
						<input type="number" className="form-control my-1  w-full  "  autoComplete="off"   ></input>
            </div>
                  <div>
						<label className='addbooklabel'>Edition: </label>
						<input type="number" className="form-control my-1  w-full   "  autoComplete="off"   ></input>
            </div>
					 </div>

            <div className="mt-2 flex flex-col">
						<label className='addbooklabel'>Digital Version: </label>
						<input type="file" className="form-control my-1    "  autoComplete="off"   ></input>
            </div>
            <div className="mt-3 flex items-center laptop:flex phone:hidden flex-col">
	
						<input type="submit" className="form-control my-1 addbooksubmit py-2 px-20  "  autoComplete="off" value='Add Book'  /> 
            </div>
            



          


     </div>
     <div className='moredetails py-4 tablet:py-6 desktop:py-8  desktop:col-span-3  phone:col-span-12 flex flex-col desktop:items-center'>
         <div className='flex flex-col laptop:my-8 phone:my-0 px-7 desktop:px-0'>

       <div className="w-full grid grid-row-2 desktop:grid-cols-1 laptop:grid-cols-1 tabletlg:grid-cols-2 tablet:grid-cols-2 phone:grid-cols-1 phone:gap-1 tablet:gap-1 tabletlg:gap-2">   
      
       <div className="">
         <p><span className='openbookclassname'>Material type: &nbsp; </span></p>
       <Creatable

         isClearable
        value={materialValue}
        options={materialOptions}
        onChange={materialhandleChange}
        onCreateOption={materialhandleCreate}

         

        classNamePrefix="materialtype"
        styles={customStyles}

      />
      </div> 
      <div>
         <p><span className='openbookclassname'>Literary Form: &nbsp; </span> </p>
        <Creatable

         isClearable
        value={literaryValue}
        options={literaryOptions}
        onChange={literaryhandleChange}
        onCreateOption={literaryhandleCreate}

         

        classNamePrefix="materialtype"
        styles={customStyles}

      />
      </div>
         <div className="">
         <p><span className='openbookclassname'>Publisher: &nbsp; </span>	</p>
         <input className="infoaddbook" type='text'></input>
         </div>
         <div>
         <p><span className='openbookclassname'>Publication Date: &nbsp; </span>	</p>
         <input className="infoaddbook w-full" type='date'></input>
         </div>
         <div>
         <p><span className='openbookclassname'>Publication Place: &nbsp; </span>	</p>
         <input className="infoaddbook" type='text'></input>
         </div>
         <div>
         <p><span className='openbookclassname'>Copyright Date: &nbsp; </span>	</p>
         <input className="infoaddbook w-full" type='date'></input>
          </div>
         <div>
         <p><span className='openbookclassname'>ISBN: &nbsp; </span>	</p>
         <input className="infoaddbook" type='text'></input>
         </div>
         <div>
         <p><span className='openbookclassname'>Call number: &nbsp; </span>	</p>
         <input className="infoaddbook" type='text'></input>
        </div>
         <div>
         <p><span className='openbookclassname'>Number of Copies: &nbsp; </span>	</p>
         <input className="infoaddbook" type='number'></input>
         </div>

         
      </div> 
         <div className="mt-7 flex items-center laptop:hidden phone:flex flex-col">
	
						<input type="submit" className="form-control my-1 addbooksubmit py-2 px-20  "  autoComplete="off" value='Add Book'  /> 
            </div>
       </div>  
     </div>
     
     </div>
     </form>
     </div>   

</div>

     
     
     
     </>
 );

};

export default Addbook;