import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {console.log(theme)}
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);