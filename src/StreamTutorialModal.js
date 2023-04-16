import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QRCode from 'react-qr-code';
import StreamAuth from './StreamAuth';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90vw",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 12,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function StreamTutorialModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><StreamAuth/></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           <div className='self-center'>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              <p className='text-lg font-bold uppercase'>            
                Setup Superfluid Payment 
              </p>
              </Typography>
            </div>
           
            <div className='self-center m-8'>
              <QRCode value="0x45C01cEB87dbe6807EBECb9161408fC5c6AcB5d1" size="250" />
            </div>
            <p className='text-sm self-center font-bold'>Room Address: 
            </p>

            <p className='text-sm self-center'>0x45C01cEB87dbe6807EBECb9161408fC5c6AcB5d1 </p>
            <div className='self-center'> 
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <p className='text-md font-bold uppercase'>            
              1. Go to Superfluid dashboard
            </p>
            <p className='font-thin'>
            Connect to Web3Provider (Metamask)
            </p>
            </Typography>

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <p className='text-md font-bold uppercase'>            
              2. Wrap your tokens   
            </p>   

            <p className='font-thin'>
            Convert your tokens to wrapped tokens            </p>      
            </Typography>

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <p className='text-md font-bold uppercase'>            
              3. Start streaming   
            </p>        

            <p className='font-thin'>
            Open a stream to this room's address            </p>
             </Typography>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}