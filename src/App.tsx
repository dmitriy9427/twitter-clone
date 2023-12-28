import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/:page' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
