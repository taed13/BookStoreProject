
import './App.css';
import React, { createContext, useEffect, useState, useCallback } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import ForgotPassword from './Auth/ForgotPassword/ForgotPassword';
import AppLayout from './layout/AppLayout/AppLayout';
import BookDetail from './pages/BookDetail/BookDetail';
import Basket from './pages/Basket/Basket';
import MyAccount from './pages/MyAccount/MyAccount';
import EmailList from './pages/EmailList/EmailList';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import InformationUser from './pages/InformationUser/InformationUser';
import EditName from './pages/InformationUser/EditName/EditName';


export const AppContext = createContext({});

function App() {
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
            <Route path='basket' element={<AppLayout />} >
              <Route path='detail' element={<Basket />} />
            </Route>
            <Route path='book' element={<AppLayout />} >
              <Route path='detail' element={<BookDetail />} />
            </Route>
            <Route path='my-account' element={<AppLayout />} >
              <Route path='detail' element={<MyAccount />} />
            </Route>
            <Route path='my-account' element={<AppLayout />} >
              <Route path='detail'>
                <Route path='infor-user' element={<InformationUser />} />
              </Route>
            </Route>
            <Route path='my-account' element={<AppLayout />} >
              <Route path='detail'>
                <Route path='infor-user' >
                  <Route path='edit-name' element={<EditName />} />
                </Route>
              </Route>
            </Route>
            <Route path='email-list' element={<AppLayout />} >
              <Route path='detail' element={<EmailList />} />
            </Route>



            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>

      </div>
    </AppContext.Provider>

  );
}

export default App;
