import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


import classes from "./Auth.module.scss";

type autchProps = {
    setOpenModalRegister: (v: boolean) => void;
    setOpenModalLogin: (v: boolean) => void;
}

const Auth: React.FC<autchProps> = ({ setOpenModalRegister, setOpenModalLogin }) => {

    const navigate = useNavigate()

    const onClickLogin = () => {
        setOpenModalLogin(true)
        navigate('login')
    }
    const onClickRegister = () => {
        setOpenModalRegister(true)
        navigate('register')
    }

    return (
        <>
            <div className={classes.wrapper}>
                <section className={classes.imageBlock}>
                    <ul color='white' className={classes.listItems}>
                        <svg width="250px" height="250px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white" />
                        </svg>
                        <li className={classes.listItem}>Читайте</li>
                        <li className={classes.listItem}>Узнавайте</li>
                        <li className={classes.listItem}>Общайтесь</li>
                        <li className={classes.listItem}>Развивайтесь</li>
                    </ul>
                </section>
                <section className={classes.buttonBlock}>
                    <svg className="sidebar__svg" width="30px" height="30px" viewBox="0 0 32 32" fill="#50b7f5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7224 8.65878 27.7095 8.62731 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z" fill="#47ACDF" />
                    </svg>
                    <h1 className={classes.header}>Будь в курсе происходящего</h1>
                    <h4 className={classes.subHeader}>Присоединяйтесь к Твиттеру прямо сейчас!</h4>
                    <button onClick={onClickRegister} className={classes.regi}>Зарегистрироваться</button>
                    <button onClick={onClickLogin} className={classes.login}>Войти</button>
                </section>

            </div >
            <Outlet />
        </>
    )
}

export default Auth;

