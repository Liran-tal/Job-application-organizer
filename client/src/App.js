import React from 'react'; 
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './App.css';
import JobForm from './components/form/job-form.component';
// import Table from './components/table/table.component';
function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      {/* <Table /> */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <JobForm />
      </LocalizationProvider>
    </div>
  );
}

export default App;
