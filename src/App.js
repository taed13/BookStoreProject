
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
import EditEmail from './pages/InformationUser/EditEmail/EditEmail';
import EditPassword from './pages/InformationUser/EditPassword/EditPassword';
import ViewMyPurchases from './pages/ViewMyPurchases/ViewMyPurchases';
import ViewMyAddress from './pages/ViewMyAddress/ViewMyAddress';
import AddNewAddress from './pages/ViewMyAddress/AddNewAddress/AddNewAddress';
import DetailMyPurchase from './pages/ViewMyPurchases/DetailMyPurchase/DetailMyPurchase';
import ProcessCheckout from './pages/ProcessCheckout/ProcessCheckout';
import CouponCode from './pages/ProcessCheckout/CouponCode/CouponCode';
import Payment from './pages/ProcessCheckout/Payment/Payment';


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
                <Route path='my-purchases' element={<ViewMyPurchases />} />
                <Route path='my-address' element={<ViewMyAddress />} />
              </Route>
            </Route>
            <Route path='my-account' element={<AppLayout />} >
              <Route path='detail'>
                <Route path='my-purchases' >
                  <Route path='detail-my-purchase' element={<DetailMyPurchase />} />
                </Route>
              </Route>
            </Route>
            <Route path='my-account' element={<AppLayout />} >
              <Route path='detail'>
                <Route path='infor-user'>
                  <Route path='edit-name' element={<EditName />} />
                  <Route path='edit-email' element={<EditEmail />} />
                  <Route path='edit-password' element={<EditPassword />} />
                </Route>
              </Route>
            </Route>
            <Route path='my-account' element={<AppLayout />} >
              <Route path='detail'>
                <Route path='my-address'>
                  <Route path='add-new-address' element={<AddNewAddress />} />
                </Route>
              </Route>
            </Route>


            <Route path='email-list' element={<AppLayout />} >
              <Route path='detail' element={<EmailList />} />
            </Route>



            <Route path='process-checkout' element={<AppLayout />} >
              <Route path='payment-infor' element={<ProcessCheckout />} />
              <Route path='coupon-code' element={<CouponCode />} />
              <Route path='payment' element={<Payment />} />

            </Route>


            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>

      </div>
    </AppContext.Provider>

  );
}

export default App;
