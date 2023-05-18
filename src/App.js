
import './App.css';
import React, { createContext, useEffect, useState, useCallback } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';


export const AppContext = createContext({});

function App() {
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{ user, setUser }} >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />

          </Routes>
        </BrowserRouter>

      </div>
    </AppContext.Provider>

  );
}

export default App;
