import {
    EthereumClient,
    w3mConnectors,
    w3mProvider
  } from "@web3modal/ethereum";
  import axios from "axios";
  import { Web3Modal } from "@web3modal/react";
  import { useAccount, useConnect, useDisconnect, useEnsAvatar,useNetwork, useProvider, useSigner, useEnsName} from 'wagmi'
  import { configureChains, createClient, WagmiConfig } from "wagmi";
  import { goerli } from "wagmi/chains";
  import { Web3Button } from "@web3modal/react";
  
  
  // Get projectID at https://cloud.walletconnect.com
  const chains = [goerli]
  const projectId = 'e983ebfcac71d2238bff4be5adf4a941'
  
  const { provider } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider
  })

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);
  //https://docs.walletconnect.com/2.0/web3modal/react/installation#usage

  export function ConnectWallet() {
    return (
      <>
        <WagmiConfig client={wagmiClient}>
          <Web3Button /> 
          <WalletStatus/>
        </WagmiConfig>
  
        <Web3Modal
            projectId="e983ebfcac71d2238bff4be5adf4a941"
            ethereumClient={ethereumClient}
            themeMode = {'dark'}
            enableAccountView = {"false"}
            enableExplorer = {'false'}
            defaultChain={goerli}
            
            themeVariables={{
              '--w3m-font-family': 'Roboto, sans-serif',
              '--w3m-accent-color': '#5783b1',
              '--w3m-background-color'	: '#5783b1',
              '--w3m-button-border-radius' : "8px",
              '--w3m-logo-image-url	' : "none",
            }}
          />
      </>
    );
  }
  
  // Get Wallet Data here/* Created with https://www.css-gradient.com */
// Make sure that this component is wrapped with WagmiConfig
  export const WalletStatus = () => {
    // Wallet Data From Wagmi
    const { address, isConnected, isDisconnected } = useAccount();

 
    if (isConnected) {
      window.isConnected = true;
      window.address = address;
    }

    if (isDisconnected) {
      window.isConnected = false;
      window.address = "";

    }
    return (
      <> 
      {/* Data Here for Debugging */}
        {/* <div>Provider: {console.log("PROVIDER:",provider)}</div> */}
        {/* <div>Signer: {console.log(signer)}</div> */}
        {/* <div>ChainID: {chain.id}</div> */}
        {/* <div>Address: {address}</div> */}
        {/* <div>Chain: {chain.network}</div> */}
      </>
    );
  };

  export const WalletAddress = () => {
    const { address, isConnected, isDisconnected } = useAccount();
    if (isConnected) {
      return address.slice(0,5) + "..." + address.slice(-5)
    }
  }
  
  