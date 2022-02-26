import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import { ContractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, ContractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}

export const TransactionProvider = ({ children }) => {
const [connectedAccount, setconnectedAccount] = useState('');

    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert("Please Install Metamask");

        const account = await ethereum.request({ method: 'eth_accounts' });

        console.log(account);
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please Install Metamask");

            const account = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(account[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.");
        }
    }

    useEffect(() => {
      checkIfWalletIsConnected();
    }, []);
    

    return(
        <TransactionContext.Provider value={{ connectWallet }}>
            {children}
        </TransactionContext.Provider>
    );
}