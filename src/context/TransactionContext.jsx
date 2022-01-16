import React, { useEffect,useState,createContext } from "react";
import {ethers} from 'ethers'
import {contractAbi,contractAddress} from "../utils/constants"

export const TransactionContext = createContext();

const {etherium} = window


