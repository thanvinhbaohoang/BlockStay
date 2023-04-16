import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} >
    
      <button onClick={handleClick} class="group mt-20 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-green-800 active:bg-green-200">
        <span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white bg-gradient-to-br from-teal-500 to-green-500 group-hover:from-teal-500 group-hover:to-green-500 rounded-md group-hover:bg-opacity-0">
          <p class="group-hover:scale-[1.03] text-white transition"> Unlock Door </p>
        </span>
      </button>

      <Snackbar 
        open={open} 
        autoHideDuration={1500} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >

        {window.isStreamAuthenticated? 
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Door Unlocked! Welcome Home ! 
        </Alert> 
        : 
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please Pay Before Using The Room !
        </Alert>         }

      </Snackbar>
       </Stack>
  );
}

