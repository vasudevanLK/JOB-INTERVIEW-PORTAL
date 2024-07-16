import './App.css';
import React from 'react';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Admin from './Admin';
import Userpage from './Userpage';
import JobListingsPage from './JoblistingPage';
import UserForm from './userform'
import JobForm from './jobform';
import Testing from './testing';
import NotFound from './Error.js'; 

function App() {
  return (
<BrowserRouter>
<Routes>

  <Route path='/' element={<Login/>}  />
  <Route path='/register' element={<Register/>}  />
  <Route path='/login' element={<Login/>}  />
  <Route path='/admin' element={<Admin/>}  />
  <Route path='/user' element={<Userpage/>}  />
  <Route path='/job' element={<JobListingsPage/>}  />
  <Route path='/jobform' element={<JobForm/>}  />
  <Route path='/form' element={<UserForm/>}  />
  <Route path='/test' element={<Testing/>}  />
  
  
  <Route path="*" element={<NotFound />} />

</Routes>

</BrowserRouter>

  );
}

export default App;
