import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: grey,
    error: red
  },
  typography: {
    fontFamily: [
      'Special Elite',
      'Roboto',
      'sans-serif',
      'Helvetica Neue',
      'Arial'
    ]
  }
});

export default theme;
