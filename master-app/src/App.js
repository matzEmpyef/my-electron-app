import React, { Suspense } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Login } from './pages/login/Login';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Home } from './pages/home/Home';

function App() {
  function RequireAuth({ children }) {
    let authenticated = true;
    return authenticated === true ? children : <Navigate to="/" replace />;
  }

  return (
    <HashRouter>
	<Routes>
	  <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} >
		<Route index element={<Home />} />		
	  </Route>
	  <Route path='/' element={<Login />} />
	</Routes>>
    </HashRouter>
  );
}

export default App;
