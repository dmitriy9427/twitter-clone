import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false)
  const [openModalRegister, setOpenModalRegister] = useState<boolean>(false)

  const navigate = useNavigate()


  const closeModal = () => {
    setOpenModalRegister(false)
    setOpenModalLogin(false)
    navigate('/')
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Auth setOpenModalLogin={setOpenModalLogin} setOpenModalRegister={setOpenModalRegister} />}>
          <Route path='login' element={<Login closeModal={closeModal} />} />
          <Route path='register' element={<Register closeModal={closeModal} />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
