import React from 'react';
import { ConnectWallet } from './ConnectWallet';
import { WalletData } from './ConnectWallet';
import { WalletAddress } from './ConnectWallet';
import StreamTutorialModal from './StreamTutorialModal';
import StreamAuth from './StreamAuth';

export default class OccupiedRoom extends React.Component {
    render() {
         return (
            <div>
                <div className='relative p-8 h-[70vh] w-[80vw] rounded-3xl items-center justify-center shadow-xl border-2 flex flex-col bg-white '>
                    <h3 className='font-medium'> ROOM </h3>
                    <h1 className='text-9xl font-bold'> 127</h1>
                    <p className='text-red-600'> BOOKED</p>
                    
                    <div className='text-sm text-red-500'>  
                    
                        <div className='flex  items-center'>
                    
                            <div className='mr-1'>
                                <span class="relative flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            </div>

                            <p className=''>
                                <WalletAddress/>
                            </p>

                        </div>
                    </div>

                    <div className='self-center border-4 radius-lg '>
                            <StreamTutorialModal/>
                        </div>
                    {/* <ConnectWallet/> */}

                    <button class="group mt-20 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-orange-500 group-hover:from-red-500 group-hover:to-orange-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-orange-800">
                  <span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <p class="group-hover:scale-[1.03] text-white transition"> Unlock Door </p>
                  </span>
                </button>

               
                </div>

                
            </div>
         )
    }
}