import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import closeIcon from '../../images/close.svg';
import twitterIcon from '../../images/twitter.svg';

import styles from './Login.module.scss';


type LoginProps = {
    closeModal: () => void
}

const Login: React.FC<LoginProps> = ({ closeModal }) => {

    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "unset"
        };
    }, []);

    useEffect(() => {
        function handleEscapeKey(event: KeyboardEvent) {
            if (event.code === 'Escape') {
                closeModal()
            }
        }
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [])

    function onSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        navigate('/pages/home')
    }


    return (<>

        <div className={styles.div}></div>
        <div className={styles.wrapper} >
            <form onSubmit={onSubmitLogin} className={styles.form}>
                <div onClick={closeModal} className={styles.close}><img className={styles.closeIcon} src={closeIcon} alt="close-icon" /></div>
                <img className={styles.twitterIcon} src={twitterIcon} alt="twitterIcon" />
                <h4 className={styles.header}>Войти в твиттер</h4>

                <div className={styles.labels}>
                    <label className={styles.label} htmlFor="email">
                        Введите email:
                        <input className={styles.input} type="email" id='email' />
                    </label>
                    <label className={styles.label} htmlFor="password">
                        Введите пароль:
                        <input className={styles.input} type="password" />
                    </label>
                    <button className={styles.button}>Войти</button>
                </div>
            </form>
        </ div></>

    )
}

export default Login;
