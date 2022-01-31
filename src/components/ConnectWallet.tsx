import React from "react";

const ConnectWallet = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      //setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

export default ConnectWallet;