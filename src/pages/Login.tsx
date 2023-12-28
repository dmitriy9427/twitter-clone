import React from 'react'
import { Link } from 'react-router-dom';

function Login() {

    return (
        <div style={{ opacity: "999" }}>
            <form>
                <label htmlFor="email">
                    Введите email:
                    <input type="email" id='email' />
                </label>
                <label htmlFor="password">
                    Введите пароль:
                    <input type="password" />
                </label>
                <button>Войти</button>
                <Link to={'/register'}>Зарегистрироваться</Link>
            </form>
        </div>
    )
}

export default Login;
