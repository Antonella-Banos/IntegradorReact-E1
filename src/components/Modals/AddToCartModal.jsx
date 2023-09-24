import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@mui/material';
import useStyles from './useStyles';


const AddToCartModal = ({ open, onClose, onAccept }) => {

  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent className={classes.dialogContent}>
        <DialogContentText className={classes.dialogContentText}>
          ¿Desea agregar este álbum al carrito?
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

export default AddToCartModal;
