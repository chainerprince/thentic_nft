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
    const [transactionCount,setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e,name) => {
        setFormData((prevState)=>({...prevState,[name]:e.target.value}))
    }

    const getTransactions = async () => {
        try {
            
            if(!ethereum) return alert("Please install meta mask")
            const transactionContract = getEtheriumContract()
            const allTransactions = await transactionContract.getAllTransactions();
            
            
            const formattedTransactions = allTransactions.map(transaction=>{
                return {addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)}
            })
            

            setTransactions(formattedTransactions);
            

        } catch (error) {
            console.log(error)
        }


    }



    const checkWalletConnection = async () => {
        try {
            
            if(!ethereum) return alert("Please install meta mask")
            const accounts = await ethereum.request({method:'eth_accounts'})
            if(accounts.length){
                setCurrentAccount(accounts[0]);
                getTransactions();

            }else{
                console.log("No accounts linked");
            }
            console.log(accounts)

        } catch (error) {
            console.log(error)   
            throw new Error("No ethereum object")
        }
        
    }

    const checkTransactionExists = async () => {
        try {
            const transactionContract = getEtheriumContract()
        const transactionCount = await transactionContract.getTransactionCount()
        window.localStorage.setItem("transactionCount",transactionCount);
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
            console.log(addressTo)
            console.log(currentAccount)
            const transactionContract = getEtheriumContract()
            console.log(currentAccount,"The transaction contract")
            await ethereum.request({
                method: 'eth_sendTransaction',
                params:[{
                    from:currentAccount,
                    to:addressTo,
                    gas:'0x5208',
                    value:parsedAmount._hex
                }]
            })

            
            const txHash = await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);
            setisLoading(true)
            console.log(`the transaction ${txHash.hash}`)
            await txHash.wait();
            setisLoading(false)
            console.log(`Success ${txHash.hash}`)

            const transactionCount = await transactionContract.getTransactionCount()
            setTransactionCount(transactionCount.toNumber())
            window.reload();
        } catch (error) {
            throw new Error("No ethereum object")
        }
    }
    useEffect(()=>{
        checkWalletConnection();
        checkTransactionExists();
    },[])
    return (
        <TransactionContext.Provider value={{transactions,connectWallet,currentAccount,formData,setFormData,handleChange,sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )

}


