import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './index.scss'
import Widgets from '../../components/Widgets';

const Main = () => {


    return (
        <div className='main'>
            <Sidebar />

            <Outlet />

            <Widgets />
        </div>
    )
}

export default Main;
