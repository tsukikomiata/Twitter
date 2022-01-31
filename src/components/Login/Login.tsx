import styles from "./Login.module.css"
import closeIcon from "../icons/LoginRegisterIcons/CloseIcon"
import twitterIcon from "../icons/LoginRegisterIcons/TwitterIcon"
import React, {useEffect, useState} from "react";


async function loginUser(data?: any) {
    return fetch('http://localhost:8000/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

function Login({auth, setAuthorised, user, setUser}: {auth?: any, setAuthorised?: any, user?: any, setUser?: any}) {
    const handleSubmit = async (event?: any) => {
        event.preventDefault();
        const data = {
            name: event.target.elements.name.value,
            password: event.target.elements.password.value
        }
        let token;
        token = await loginUser(data).catch(err => token = {token: 'error'});
        if (token.token !== 'error') {
            console.log(token);
            auth = true;
            setAuthorised(auth);
            user = token.user;
            setUser(user);
            localStorage.setItem('token', token.token);
            console.log(localStorage.getItem("token"));
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.login}>
                <div className={styles.login__header}>
                    {closeIcon}
                    {twitterIcon}
                </div>
                <input
                    placeholder="Введите тэг"
                    type="text"
                    id="name"/>
                <input
                    placeholder="Введите пароль"
                    type="password"
                    id="password"/>
                <button type="submit" className={styles.login__button}>
                    Войти
                </button>
            </form>
            </>
    )
}

export default Login