import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './styles/theme.style'
import { UserProvider } from './providers/user-data/user-data.context';
import NavBar from './components/navbar/navbar';
import AppRoutes from './routes/routes';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <UserProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <NavBar />
              <AppRoutes />
            </LocalizationProvider>
          </UserProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
