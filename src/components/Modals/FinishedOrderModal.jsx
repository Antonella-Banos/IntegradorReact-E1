import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@mui/material';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    // Custom styles for DialogContent
    padding: theme.spacing(2),
    border: '2px solid #ef94bd',
    width: '300px',
  },
  dialogContentText: {
    // Custom styles for DialogContentText
    color: '#333',
    fontSize: '1.2rem',
    fontFamily: 'Pathway Gothic One',
    textAlign: 'center',
  },
  button: {
    // Custom styles for Button
    backgroundColor: '#ef94bd',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'linear-gradient(100deg, #92a8d1, #f7cac9)',
    },
  },
}));

const FinishedOrderModal = ({ open, onClose, onAccept }) => {

  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent className={classes.dialogContent}>
        <DialogContentText className={classes.dialogContentText}>
         ¿Desea finalizar su compra?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAccept} className={classes.button}>
          Aceptar
        </Button>
        <Button onClick={onClose} className={classes.button}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FinishedOrderModal;
