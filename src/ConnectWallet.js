import {
    EthereumClient,
    w3mConnectors,
  } from "@web3modal/ethereum";
  import axios from "axios";
  import { Web3Modal } from "@web3modal/react";
  import { useAccount, useConnect, useDisconnect, useEnsAvatar,useNetwork, useProvider, useSigner, useEnsName} from 'wagmi'
  import { configureChains, createClient, WagmiConfig } from "wagmi";
  import { alchemyProvider } from 'wagmi/providers/alchemy'
  import { infuraProvider } from 'wagmi/providers/infura'
  import { publicProvider } from 'wagmi/providers/public'
  import { goerli } from "wagmi/chains";
  import { Web3Button } from "@web3modal/react";
  
  
  const chains = [goerli];
  const { provider } = configureChains(
    chains,
    [
      alchemyProvider({ apiKey: 'Eje_Y-pqB-HZwxVWpOYEUQoB44DhjZGO' }),
      infuraProvider({ apiKey: '2FTMzOge17hhTwy3mfVXN4T7L3j' }),
      publicProvider(),
    ],
  )
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({
      projectId: "<YOUR_PROJECT_ID>",
      version: "1", // or "2"
      appName: "web3Modal",
      chains,
    }),
    provider,
  });
  
  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);
  //https://docs.walletconnect.com/2.0/web3modal/react/installation#usage

  export function ConnectWallet() {
    return (
      <>
        {/* <WagmiConfig client={wagmiClient}> */}
          <Web3Button /> 
          <WalletStatus/>
        {/* </WagmiConfig> */}
  
        <Web3Modal
            projectId="<YOUR_PROJECT_ID>"
            ethereumClient={ethereumClient}
            themeMode = {'dark'}
            enableAccountView = {"false"}
            enableExplorer = {'false'}
            defaultChain={goerli}
            
            themeVariables={{
              '--w3m-font-family': 'Roboto, sans-serif',
              '--w3m-accent-color': '#7FC051',
              '--w3m-background-color'	: '#7FC051',
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
    const { data: signer, isError, isLoading } = useSigner();  // https://wagmi.sh/react/hooks/useSigner
    const { chain, chains } = useNetwork()
    const provider = useProvider()
 
    if (isConnected) {
      window.isConnected = true;
      window.address = address;
      
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
  
  