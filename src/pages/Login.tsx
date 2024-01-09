import React, { useEffect } from 'react'
import styles from './Login.module.scss'
import closeIcon from '..//images/close.svg';
import twitterIcon from '..//images/twitter.svg'

type LoginProps = {
    closeModal: () => void
}

const Login: React.FC<LoginProps> = ({ closeModal }) => {

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


    return (<>

        <div className={styles.div}></div>
        <div className={styles.wrapper} >

            <form className={styles.form}>
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
