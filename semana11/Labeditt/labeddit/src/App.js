import Router from "./Router/Router";
import theme from './Constants/Theme'
import { ThemeProvider } from '@material-ui/core/styles'
import GlobalState from "./Global/GlobalState";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
