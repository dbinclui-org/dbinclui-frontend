import { Theme, SxProps } from '@mui/material';

const content: SxProps<Theme> = {
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  border: '2px solid',
  flexDirection: 'column',
  borderColor: (theme) => theme.palette.secondary.contrastText,
  background: (theme) => theme.palette.background.paper,
};

const header: SxProps<Theme> = {
  border: '2px solid',
  borderColor: (theme) => theme.palette.secondary.contrastText,
  background: (theme) => theme.palette.primary.main,
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
};

const headerTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: '1.3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '2rem 0',
};

const buttonDigitalContent: SxProps<Theme> = {
  mr: 0,
  ml: 'auto',
  mb: '0.8rem',
  display: 'block',
  padding: '0.3rem 1rem',
  fontWeight: '700',
  textTransform: 'none',
  width: '13.1rem',
  backgroundColor: (theme) => theme.palette.secondary.dark,
  color: (theme) => theme.palette.text.disabled,
};

const labelInput: SxProps<Theme> = {
  color: (theme) => theme.palette.secondary.main,
  fontWeight: 'bold',
  mb: '0.5rem',
};

const input: SxProps<Theme> = {
  width: '100%',
  background: (theme) => theme.palette.primary.dark,
  borderRadius: '20px',
  color: (theme) => theme.palette.secondary.main,
  padding: '0.5rem 1rem',
  mb: '2.5rem',
};

const buttonWrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: '0.5rem',
};

const button: SxProps<Theme> = {
  fontWeight: '700',
  padding: '0.5rem 1.5rem',
  textTransform: 'none',
  fontSize: '1.2rem',
  backgroundColor: (theme) => theme.palette.secondary.dark,
  color: (theme) => theme.palette.text.disabled,
};

const buttonVoltar: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
};

const select: SxProps<Theme> = {
  padding: 0,
};

const menuItem: SxProps<Theme> = {
  'color': (theme) => theme.palette.text.primary,
  'paddingTop': 0,
  '.MuiList-root': {
    background: (theme) => theme.palette.background.paper,
  },
};

const fileName: SxProps<Theme> = {
  mr: 0,
  ml: 'auto',
  display: 'block',
  textAlign: 'right',
};

const styles = {
  content,
  header,
  headerTitle,
  buttonDigitalContent,
  labelInput,
  input,
  buttonWrapper,
  button,
  buttonVoltar,
  select,
  menuItem,
  fileName,
};

export default styles;
