import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Login from './pages/ModalsWindow/Login';
import Register from './pages/ModalsWindow/Register';
import Main from './pages/MainPage';
import Search from './components/Search';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Bookmarks from './components/Bookmarks';
import Lists from './components/Lists';
import Profile from './components/Profile';
import Home from './components/Home';

const App = () => {
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

        <Route element={<Main />}>
          <Route path='home' element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="lists" element={<Lists />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
