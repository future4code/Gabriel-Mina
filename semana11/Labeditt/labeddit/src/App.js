import  Router  from "./Router/Router";
import theme from './Constants/Theme'
import {ThemeProvider} from '@material-ui/core/styles'


 const App=() => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
