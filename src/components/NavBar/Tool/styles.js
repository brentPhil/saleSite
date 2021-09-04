import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    search: {
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        margin: '0 auto',
        width: '100%',
        maxWidth: '600px',
      },
      searchIcon: {
        boxShadow: 'none',
        color: 'white',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 2),
      },
}));