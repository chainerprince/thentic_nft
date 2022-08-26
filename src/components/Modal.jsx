import React,{useState} from 'react';
import Input from "./Input";
import Loader from './Loader'
const Modal = ({isLoading,handleChange,handleSubmit , setOpen,action}) => {

  
    return (

  <div className=" sm:w-80 w-full left-1/2 absolute h-96 flex flex-col justify-start px-3 py-1 ml-1/2 mr-1/2 top-12 items-center blue-glassmorphism">
              <h2 className="text-center font-bold text-white mt-2">{action} nfts</h2>
              <button onClick={()=>setOpen(false)} className="absolute rounded-full bg-white p-1 opacity-70 -top-5 -right-2">
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#6563ff" d="M7,18a1,1,0,0,1-.707-1.707l10-10A.99989.99989,0,0,1,17.707,7.707l-10,10A.99676.99676,0,0,1,7,18Z"/><path fill="#6563ff" d="M17,18a.99676.99676,0,0,1-.707-.293l-10-10A.99989.99989,0,0,1,7.707,6.293l10,10A1,1,0,0,1,17,18Z"/></svg>
              </button>
            
             
                <Input placeholder="Name" name="name" type="text" handleChange={handleChange} />
                <Input placeholder="Short Name" name="short_name" type="text" handleChange={handleChange} />
                
                
                 {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-32 mt-2 border-[1px] p-1 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded cursor-pointer"
                >
                  Create
                </button>
              )}
            </div>
    )
};

export default Modal;
