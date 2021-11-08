import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <Router>
            <Switch>

              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>

              <PrivateRoute path='/appointment'>
                <Appointment></Appointment>
              </PrivateRoute>

              <PrivateRoute path='/dashboard'>
                <Dashboard />
              </PrivateRoute>

              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>



            </Switch>
          </Router>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
