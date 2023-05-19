
import './App.css';
import React, { createContext, useEffect, useState, useCallback } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import ForgotPassword from './Auth/ForgotPassword/ForgotPassword';


export const AppContext = createContext({});

function App () {
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{ user, setUser }} >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>

      </div>
    </AppContext.Provider>

  );
}

export default App;
