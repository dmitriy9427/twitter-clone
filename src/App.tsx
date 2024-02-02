import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Main from './pages/MainPage';
import Search from './components/Search';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Bookmarks from './components/Bookmarks';
import Lists from './components/Lists';
import Profile from './components/Profile';
import Home from './components/Home';
import Auth from './pages/Auth';
import Login from './pages/ModalsWindow/Login';
import Register from './pages/ModalsWindow/Register';


const App: React.FC = () => {
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false)
  const [openModalRegister, setOpenModalRegister] = useState<boolean>(false)

  const navigate = useNavigate()

  const closeModal = () => {
    setOpenModalRegister(false)
    setOpenModalLogin(false)
    navigate('/twitter-clone/')
  }


  return (
    <div>


      <Routes>
        <Route path='/twitter-clone/' element={<Auth setOpenModalLogin={setOpenModalLogin} setOpenModalRegister={setOpenModalRegister} />}>
          <Route path='login' element={<Login closeModal={closeModal} />} />
          <Route path='register' element={<Register closeModal={closeModal} />} />
        </Route>
        <Route path='/twitter-clone/' element={<Main />} >
          <Route path='home' element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="lists" element={<Lists />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
