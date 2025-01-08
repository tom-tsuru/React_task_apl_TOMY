import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalContents from '../ModalContents/ModalContents'
import { ModalContext } from '../TaskContext/ModalContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '55%',
  height: 500,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function TaskButtons() {
  const { openModal, setOpenModal, closeModal, setCloseModal } = React.useContext(ModalContext);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div>
        <Stack sx={{ padding: '10px' }} spacing={2}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
            Add
        </Button>
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
        keepMounted
        >
        <Box sx={style}>
          <ModalContents />
        </Box>
      </Modal>
        <Button variant="contained" startIcon={<DeleteIcon />}>
            Delete
        </Button>
        </Stack>
    </div>
  );
}
