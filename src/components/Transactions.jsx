import React, { useContext } from 'react'
import dummyData from "../utils/dummyData";
import {TransactionContext} from '../context/TransactionContext'
import { shortenAddress } from '../utils/shortenAddress';
import useFetching from '../hooks/useFetching';
import Table from './Table';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetching({keyword})
    return (
        <div className="second w-4/5 sm:w-72 m-2 "
    >
        <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start my-1 w-full mb-6 p-2">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                        <p className="text-white my-1 text-base">To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p className="text-white my-1 text-base">Amount: {amount} ETH</p>
                    {message && (
                    <>
                    <br />
                    <p className="text-white my-1 text-base  whitespace-nowrap overflow-hidden">Message: {message}</p>
                    </>
                        )}
                        {/* <img
                            src={gifUrl || url}
                            alt="nature"
                            className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
                            /> */}

                            


                </div>
                <div className=" p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                            <p className="text-[#37c7da] font-bold">{timestamp}</p>
                        </div>
                
        </div>
    </div>
    )
}
const Transactions = () => {
    const {currentAccount,transactions } = useContext(TransactionContext)
    
    return (
        <div className="flex w-full justify-between items-center 2xl:px-20 main">
            <div className='flex flex-col md:p-12 py-12 px-4'>
                    {currentAccount ? (
                                <h3 className="text-white text-3xl text-center my-2">
                                Latest Transactions
                              </h3>
                    ):
                    (
                        <h3 className="text-white text-3xl text-center my-2">
                            Connect your account to see the latest transactions
                        </h3>
                    )
                     
                    }
                    <div className="flex flex-wrap justify-center items-center mt-10">
                        {transactions?.reverse().map((transaction,id)=>

                        <TransactionCard key={id} {...transaction}/> 
                            
                        )}
                    </div>

            </div>


        </div>
    )
}

export default Transactions
