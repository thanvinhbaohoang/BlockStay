import React from 'react';
import { ConnectWallet, WalletData } from './ConnectWallet';
import { WagmiConfig } from 'wagmi';

export default class UnoccupiedRoom extends React.Component {
    render() {
         return (
            <div>
                <div className='relative p-8 h-[70vh] w-[80vw] rounded-3xl items-center justify-center shadow-xl border-2 flex flex-col bg-white '>
                    <h3 className='font-medium'> ROOM </h3>
                    <h1 className='text-9xl font-bold'> 127</h1>
                    <p className=''> AVAILABLE</p>

                   


                <div className="mt-20">
                  <ConnectWallet />
                  
                </div>

                </div>

                
            </div>
         )
    }
}