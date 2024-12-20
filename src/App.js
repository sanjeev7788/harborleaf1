import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import './Components/Login.js'
import Login from './Components/Login.js';
import ForgotPassword from './Components/ForgotPassword.js';
import Updatepassword from './Components/Updatepassword.js';
function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/reset-password" element={<Updatepassword />}></Route>   
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>   

    </Routes>
    </BrowserRouter> 

  );
}

export default App;
