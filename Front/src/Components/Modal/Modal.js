import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal, 
  Backdrop
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#f2f2f2',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props) => {
  const {open, setOpen, description, color} = props
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style} textAlign='center'>
          <Typography 
            id="modal-modal-title" 
            variant="h6" 
            component="h2"
            sx={{
              color:{color}
            }}
          >
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;