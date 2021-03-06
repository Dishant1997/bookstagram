import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './assets/css/style.css';
// import './App.css';

import Login from './views/Login/Login';
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const tokenPresent = localStorage.getItem('userToken');;

  let mainContent = (
    <>
      <Route
        exact
        path='/'
        component={React.lazy(() => import('./views/Login/Login'))}
      />
      <Route
        exact
        path='/signup'
        component={React.lazy(() => import('./views/Signup/Signup'))}
      />
      <Route
        exact
        path='/reset-password'
        component={React.lazy(() => import('./views/ResetPassword/ResetPassword'))}
      />
      <Route
        exact
        path='/verify-otp'
        component={React.lazy(() => import('./views/VerifyOTP/VerifyOTP'))}
      />
      <Route
        exact
        path='/verify-email'
        component={React.lazy(() => import('./views/VerifyEmail/VerifyEmail'))}
      />
      <Route
        exact
        path='/verified-message'
        component={React.lazy(() => import('./views/VerifiedMessage/VerifiedMessage'))}
      />
      <Route
        exact
        path='/resend-otp'
        component={React.lazy(() => import('./views/ResendOTP/ResendOTP'))}
      />
      <Route
        exact
        path='/attack'
        component={React.lazy(() => import('./views/Attack/Attack'))}
      />

      {/* {localStorage.getItem('userData') === null && <Redirect to='/' />} */}
    </>
  );

  if (tokenPresent) {
    mainContent = (
      <>
        <Route
          path='/'
          component={React.lazy(() => import('./views/MainContainer/MainContainer'))}
        />
        {/* <Route
          path='/dashboard'
          component={React.lazy(() => import('./views/Dashboard/Dashboard'))}
        /> */}
      </>
    );
  }

  return (
    <React.Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>{mainContent}</Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
