import React, { FC, useState} from "react";


const CheckIfWalletIsConnected = async (currentAccountProp:string):Promise<void> => {
    const [currentAccount, setCurrentAccount] = useState("");
    try {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            setCurrentAccount(account)
            currentAccountProp = account;
            //const token = await fakeAuth();
            //setToken(token);
        } else {
            console.log("No authorized account found")
        }
    } catch (error) {
        console.log(error);
    }
}

export default CheckIfWalletIsConnected;