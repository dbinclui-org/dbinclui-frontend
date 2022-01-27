import { Theme, SxProps } from '@mui/material';

const listTitle: SxProps<Theme> = {
  textAlign: 'center',
  fontWeight: 'bold',
};

const table: SxProps<Theme> = {
  'color': (theme) => theme.palette.text.primary,
  'width': '1100px',
  'mt': '25px',
  'ml': 'auto',
  'mr': 'auto',
  'pl': '15px',
  'pr': '15px',
  'border': '2px solid',
  'borderRadius': '20px',
  'borderColor': (theme) => theme.palette.text.primary,
  '@media (max-width:780px)': {
    width: '90%',
    fontSize: '18px',
  },
};

const button: SxProps<Theme> = {
  fontWeight: '700',
  padding: '0.5rem 1.5rem',
  margin: '0 20px',
  textTransform: 'none',
  fontSize: '1.2rem',
  backgroundColor: (theme) => theme.palette.secondary.dark,
  color: (theme) => theme.palette.text.disabled,
};

const buttonTable: SxProps<Theme> = {
  'color': (theme) => theme.palette.text.primary,
  '&:hover': {
    border: '1px solid',
    borderColor: (theme) => theme.palette.primary.dark,
  },
};

const boxButton: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  marginTop: '20px',
};

const styles = {
  listTitle,
  table,
  button,
  buttonTable,
  boxButton
};

export default styles;
