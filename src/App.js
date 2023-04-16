import logo from './logo.svg';
import './App.css';
import React from 'react';
import UnoccupiedRoom from './UnoccupiedRoom';
import OccupiedRoom from './OccupiedRoom';
import { Background } from './background/Background';
import { ConnectWallet, WalletData } from './ConnectWallet';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isConnected: false,
    };

  }
  componentDidMount() {
    document.title = "BlockStay";
    window.isConnected = false;
    this.timerID = setInterval(
      () => {
          if (window.isConnected) {
          this.setState({ isConnected: true })
          } else {
          this.setState({ isConnected: false })
          }
      }, 1000
    );
  }
 

  render(){
    return (
      <WagmiConfig client={wagmiClient}>

      <div className='flex-col items-center'>
        <Background />

        <div className="relative text-3xl bottom-3 mt-[25vh] flex justify-center">
          {this.state.isConnected ?  <OccupiedRoom/> : <UnoccupiedRoom />}
        </div>
        {/* <ConnectWallet /> */}
      </div>

    </WagmiConfig>
        )

  }

}


export default App;
