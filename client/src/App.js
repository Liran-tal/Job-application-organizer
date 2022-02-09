import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './styles/theme.style'
import { UserProvider } from './providers/user-data/user-data.context';
// import AppRoutes from './routs/routs';
import './styles/App.css';

// import JobForm from './components/form/job-form.component';
// import BasicTable from './components/basic-table/basic-table.component';
import NavBar from './components/navbar/navbar';
import FeaturedTable from './components/featured-table/featured-table.component';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <UserProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <NavBar />
              {/* <AppRoutes /> */}
              <FeaturedTable />
              {/* <JobForm isNew={true} /> */}
              {/* <BasicTable /> */}
            </LocalizationProvider>
          </UserProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
