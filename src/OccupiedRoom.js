import React from 'react';
import { ConnectWallet } from './ConnectWallet';
import { WalletData } from './ConnectWallet';
import { WalletAddress } from './ConnectWallet';
import StreamTutorialModal from './StreamTutorialModal';
import StreamAuth from './StreamAuth';
import { CheckAnimation } from './UnlockDoorButton';
import SimpleSnackbar from './UnlockDoorButton';

export default class OccupiedRoom extends React.Component {
    render() {
         return (
            <div>
                <div className='relative p-8 h-[70vh] w-[80vw] rounded-3xl items-center justify-center shadow-xl border-2 flex flex-col bg-white '>
                    <h3 className='font-medium'> ROOM </h3>
                    <h1 className='text-9xl font-bold'> 127</h1>
                    
                    <div>
                    <div className='mr-1 flex items-center'>
                        <div className='mx-2'>
                                <span class="relative flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                        </div>
                                <p className='text-red-600'> BOOKED</p>

                    </div>

                    </div>
                            <StreamTutorialModal/>
                    <div className='text-sm text-red-500'>  
                    
                        <div className='flex  items-center'>
                    
                            

                            <p className=''>
                                {/* <WalletAddress/> */}
                                <ConnectWallet/>
                            </p>

                        </div>
                    </div>

                  

                   
                
                <SimpleSnackbar/>

               
                </div>
                
            </div>
         )
    }
}