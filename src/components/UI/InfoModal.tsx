import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IVote } from '../../models/IVote';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth:'260px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function InfoModal(props: any) {
  const row: IVote = props.row;
  return (
    <Modal {...props} open={props.open} onClose={props.handleClose}>
      <Box sx={style}>
        <Typography variant='h4' component='h2'>
          Info
        </Typography>

        
        <Typography sx={{ mt: 2 }}>{['name: ', row.name]}</Typography>
        <Typography sx={{ mt: 2 }}>{['language: ', row.language]}</Typography>
        <Typography sx={{ mt: 2 }}>{['sex: ', row.sex]}</Typography>
        <Typography sx={{ mt: 2 }}>{['provider: ', row.provider]}</Typography>
        <Typography sx={{ mt: 2 }}>{['provider language: ', row.providerLanguage]}</Typography>
        <Typography sx={{ mt: 2 }}>{['id: ', row.id]}</Typography>
      </Box>
    </Modal>
  );
}
