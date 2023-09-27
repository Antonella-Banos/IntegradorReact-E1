import { makeStyles } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
    dialogContent: {
      padding: theme.spacing(2),
      border: '2px solid #ef94bd',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 

      '@media (max-width: 900px)': {
        width: '500px',
      },
    },
    dialogContentText: {
      color: '#ef94bd',
      fontSize: '1.2rem',
      fontFamily: 'Pathway Gothic One',
      textAlign: 'center',
      flexWrap: 'wrap', 
    },
    button: {
      backgroundColor: '#ef94bd',
      color: '#fff',
      transition: 'opacity 0.3s',
      '&:active': {
        opacity: 0.6,  
      },
    },
  }));

export default useStyles  