// import { useState } from 'react';
import React from 'react';
import { Dialog, DialogContent, makeStyles } from '@mui/material';



const useStyles = makeStyles((theme) => ({
    dialogContent: {
      textAlign: 'center',
      padding: theme.spacing(2),
      backgroundColor: '#ef94bd',
      color: '#fff',
      fontFamily: 'Pathway Gothic One',
      fontSize: '1.2rem',
      width: '300px',
    },
  }));

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

