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
    const [formData, setformData] = useState({addressTo: '', amount: '', keyword: '', message: ''});
    const [isLoading, setisLoading] = useState(false);
    const [transactionCount, settransactionCount] = useState(localStorage.getItem('transactionCount'));

    const handleChange = (e, name) => {
        setformData((prevState) => ({...prevState, [name]: e.target.value }));
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please Install Metamask");

            const account = await ethereum.request({ method: 'eth_accounts' });

            if(account.length){
                setconnectedAccount(account[0]);

                // getAllTransactions();
            } else{
                console.log('No account found');
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.");
        }
        
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

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please Install Metamask");

            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: connectedAccount,
                    to: addressTo,
                    gas: '0x33450', // 2 บาท (210000 Gwei)
                    value: parsedAmount._hex, // BNB amount
                }]
            });

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setisLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setisLoading(false);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            settransactionCount(transactionCount.toNumber());

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.");
        }
    }

    useEffect(() => {
      checkIfWalletIsConnected();
    }, []);
    

    return(
        <TransactionContext.Provider value={{ connectWallet, connectedAccount, formData, setformData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}