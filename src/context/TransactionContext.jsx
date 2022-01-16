import React, { useEffect,useState,createContext } from "react";
import {ethers} from 'ethers'
import {contractAbi,contractAddress} from "../utils/constants"

export const TransactionContext = createContext();

const {ethereum} = window

const getEtheriumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractAbi,signer)
    return transactionContract;

}

export const TransactionProvider = ({children}) => {
    const [currentAccount,setCurrentAccount] = useState('')
    const [formData, setFormData] = useState({addressTo:"",amount:"",keyword:"",message:""})
    const [isLoading, setisLoading] = useState(false);

    const handleChange = (e,name) => {
        setFormData((prevState)=>({...prevState,[name]:e.target.value}))
    }
    const checkWalletConnection = async () => {
        try {
            
            if(!ethereum) return alert("Please install meta mask");
            const accounts = await ethereum.request({method:'eth_accounts'})
            if(accounts.length){
                setCurrentAccount(accounts[0]);

            }else{
                console.log("No accounts linked");
            }
            console.log(accounts)

        } catch (error) {
            console.log(error)   
            throw new Error("No ethereum object")
        }
        
    }

    const connectWallet = async() => {
            try {
                if(!ethereum) return alert("Please install meta mask");
                const accounts = await ethereum.request({method:'eth_requestAccounts'})
                setCurrentAccount(accounts[0]);
                
            } catch (error) {
             console.log(error)   
             throw new Error("No ethereum object")
            }
    }
    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please install meta mask");
            const {addressTo,amount,keyword,message} = formData;
            const parsedAmount = ethers.utils.parseEther(amount)

            const transactionContract = getEtheriumContract()
            await ethereum.request({
                method: 'eth_sendTransaction',
                params:{
                    from:currentAccount,
                    to:addressTo,
                    gas:'0x5208',
                    value:parsedAmount._hex
                }
            })

            const txHash = await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);
            setisLoading(true)
            console.log(`the transaction ${txHash.hash}`)
            await txHash.wait();
            


        } catch (error) {
            throw new Error("No ethereum object")
        }
    }

    useEffect(()=>{
        checkWalletConnection();
    },[])
    return (
        <TransactionContext.Provider value={{connectWallet,currentAccount,formData,setFormData,handleChange,sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )

}


