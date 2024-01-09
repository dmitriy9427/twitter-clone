import React, { useEffect } from 'react';
import styles from './Login.module.scss';
import closeIcon from '..//images/close.svg';
import twitterIcon from '..//images/twitter.svg';


type RegisterProps = {
    closeModal: () => void
}

const Register: React.FC<RegisterProps> = ({ closeModal }) => {
    useEffect(() => {
        function handleEscapeKey(event: KeyboardEvent) {
            if (event.code === 'Escape') {
                closeModal()
            }
        }
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.div}></div>
            <form className={styles.form}>
                <div onClick={closeModal} className={styles.close}><img className={styles.closeIcon} src={closeIcon} alt="close-icon" /></div>
                <img className={styles.twitterIcon} src={twitterIcon} alt="twitterIcon" />
                <h4>Зарегистрироваться в твиттере</h4>
                <div className={styles.labels}>
                    <label className={styles.label} htmlFor="name">
                        Введите ваше имя:
                        <input className={styles.input} type="text" id='name' />
                    </label>
                    <label className={styles.label} htmlFor="email">
                        Введите email:
                        <input className={styles.input} type="email" id='email' />
                    </label>
                    <label className={styles.label} htmlFor="password">
                        Введите пароль:
                        <input className={styles.input} type="password" />
                    </label>
                    <button type='button' className={styles.button}>Далее</button>
                </div>

            </form>
        </div>
    )
}

export default Register
