import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IVote } from '../../models/IVote';
import classes from './VoteRow.module.css';
import InfoModal from '../UI/InfoModal';
interface Props {
  children: string;
  row: IVote;
  style?: React.CSSProperties;
}

const VoteRow: FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const row = props.row;
  return (
    <Card className={classes.VoteWrapper}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {row.language}
        </Typography>
        <Typography variant='h5' component='div'>
          {row.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={handleOpen}>Learn More</Button>
      </CardActions>
      <InfoModal open={open} handleClose={handleClose} row={row}></InfoModal>
    </Card>
  );
};

export default VoteRow;
