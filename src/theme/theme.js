import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useMonitorData } from '../contexts/monitorContext';

export function Theme({ children }) {

  const { darkMode } = useMonitorData();

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#b71c1c',
      },
      secondary: {
        main: '#757575',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}