import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './index.scss'
import Widgets from '../../components/Widgets';


const Main: React.FC = () => {


    return (
        <main className='main'>
            <Sidebar />

            <Outlet />

            <Widgets />
        </main>
    )
}

export default Main;
