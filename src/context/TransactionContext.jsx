import React, { useEffect,useState,createContext } from "react";
import {ethers} from 'ethers'
import {contractAbi,contractAddress} from "../utils/constants"

export const TransactionContext = createContext();

const {ethereum} = window

const getEtheriumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractAbi,signer)
    console.log(provider,signer,transactionContract);

}

export const TransactionProvider = ({children}) => {
    const checkWalletConnection = async () => {
        
        if(!ethereum) return alert("Please install meta mask");
        const accounts = await ethereum.request({method:'eth_accounts'})
        console.log(accounts)
    }

    

    useEffect(()=>{
        checkWalletConnection();
    },[])
    return (
        <TransactionContext.Provider value={{value:"Testing works fine and clea"}}>
            {children}
        </TransactionContext.Provider>
    )

}


