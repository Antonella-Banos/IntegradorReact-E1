// import { useState } from 'react';
import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import useStyles from '../Modals/useStyles';

  //Agregar {open} adentro de SuccessDialog 
  function SuccessDialog() {
    const classes = useStyles();
  
    return (
      <Dialog open={true}>
        <DialogContent className={classes.dialogContent}>
          <p>Datos enviados correctamente</p>
        </DialogContent>
      </Dialog>
    );
  }

  export default SuccessDialog;

