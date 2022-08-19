import React, { useContext,useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
import favicon from "../../src/favicon.svg"
import {TransactionContext} from "../context/TransactionContext"

import { shortenAddress } from "../utils/shortenAddress";
import Modal from "./Modal";
const Welcome = () => {
  const {connectWallet,currentAccount,formData,setFormData,handleChange,sendTransaction} = useContext(TransactionContext);

  const [open,setOpen] = useState(false);
  const [action,setAction] = useState('create');

  
  //   if(open){
  //     setOpen(false)
  //   }else{
  //     setOpen(true)
  //   }
  // }
  
  // const [loading,isLoading] = useState(true);
  
  const isLoading = false;
 
    const handleSubmit = (e) => {

      const {addressTo,amount,keyword,message} = formData;
      e.preventDefault();
      if(!addressTo || !amount || !keyword || !message) return;
      sendTransaction();
    }

    const handleFormOpen = (action) => {
      setOpen(true)
      setAction(action)
    }


    return (
        <div className="flex w-full flex-col md:flex-row justify-center items-center main">
             <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
             <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                <h1 className="text-3xl sm:text-4xl text-white text-gradient py-1">
                    All you need is here
                </h1>
                <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                    Explore the nft world. Create and sell Nfts easily on Ishyura.
                </p>
                {
                  !currentAccount && 
                  (
                    <button
                 onClick={connectWallet}
                 className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                        <AiFillPlayCircle className="text-white mr-2" />
                        <p className="text-white text-base font-semibold">
                            Connect Wallet
                        </p>
                </button>
                  )
                }
                
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
      </div>      
      </div>  
        <div className="flex flex-col flex-1 items-start justify-start w-full  mf:mt-0 mt-10">
                        <div className="p-3 flex justify-end items-start flex-col rounded-xl w-11/12 m-3 h-80 sm:w-3/4 mb-2  sm:my-7 second ">
                        <div className="flex justify-between flex-col w-full sm:w-3/4 h-full">
                        <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  {/* <SiEthereum fontSize={21} color="#fff" /> */}
                  <img src={favicon} alt="FAvorite Icons" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                  {/* {currentAccount} */}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ishyura
                </p>
              </div>
            </div>
            
            </div>
             {
                  currentAccount && 
                  (
                  <button
                 onClick={()=>setOpen(true)}
                 className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                        <AiFillPlayCircle className="text-white mr-2" />
                        <p className="text-white text-base font-semibold">
                            Exchange Tokens
                        </p>
                </button>
                  )
                }

            
            {/* <div className="h-[1px] w-full bg-gray-400 my-2" /> */}

            
           

        </div>   
        {
          open ? (
            <Modal isLoading={isLoading} setOpen={setOpen} handleSubmit = {handleSubmit} handleChange={handleChange} action={action} /> 
          ): null
        }
        
</div>
    )
}

export default Welcome
