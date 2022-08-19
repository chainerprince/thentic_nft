import React, { useEffect,useState,createContext } from "react";
import {ethers} from 'ethers'
import {contractAbi,contractAddress} from "../utils/constants"
import axios from "axios";

export const TransactionContext = createContext();

const {ethereum} = window

const getEtheriumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractAbi,signer)
    return transactionContract;

}

export const TransactionProvider = ({children}) => {
    
    const [formData, setFormData] = useState({addressTo:"",amount:"",keyword:"",message:""})
    const [isLoading, setisLoading] = useState(false);
   
    

    const handleChange = (e,name) => {
        setFormData((prevState)=>({...prevState,[name]:e.target.value}))
    }

   
    const sendTransaction = async () => {
        try {
            console.log('reached here')
const headers = {
  'Content-Type': 'application/json',
  
};
           const res = await axios.post('https://thentic.tech/api/nfts/contract',{ 
                    key: 'Zbwze05Q5WU5ot4Rwqtea5N1SMrodYYI',
                    chain_id: 97,
                    name: 'PrinceContract',                         
                    short_name:"PRC",
                    redirect_url: '/',                                  
            },{headers})
            console.log(res,'the result')

            
            // const txHash = await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);
            

            // const transactionCount = await transactionContract.getTransactionCount()
            // setTransactionCount(transactionCount.toNumber())
            window.reload();
        } catch (error) {
            throw new Error("No ethereum object")
        }
    }
    useEffect(()=>{
        // checkWalletConnection();
        // checkTransactionExists();
    },[])
    return (
        <TransactionContext.Provider value={{formData,setFormData,handleChange,sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )

}


