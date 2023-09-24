import { makeStyles } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
    dialogContent: {
      padding: theme.spacing(2),
      border: '2px solid #ef94bd',
      width: '300px',
    },
    dialogContentText: {
      color: '#ef94bd',
      fontSize: '1.2rem',
      fontFamily: 'Pathway Gothic One',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#ef94bd',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'linear-gradient(100deg, #92a8d1, #f7cac9)',
      },
    },
  }));

export default useStyles  