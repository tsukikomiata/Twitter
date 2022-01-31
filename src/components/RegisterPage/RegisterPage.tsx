import styles from "./RegisterPage.module.css"
import closeIcon from "../icons/LoginRegisterIcons/CloseIcon"
import twitterIcon from "../icons/LoginRegisterIcons/TwitterIcon"
import {NavLink} from "react-router-dom";
import React from "react";

async function saveUser(data?: any) {
    return fetch('http://localhost:8000/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}


function RegisterPage({auth, user, setUser, setAuthorised}: {auth?: any, setAuthorised?: any, user?: any, setUser?: any}) {
    const onSubmit = async (event?: any) => {
        event.preventDefault();
        const data = {
            name: event.target.elements.name.value,
            password: event.target.elements.password.value,
            tag: event.target.elements.tag.value
        }
        let token;
        token = await saveUser(data).catch(err => token = {token: 'error'});
        if (token.token !== 'error') {
            localStorage.setItem('token', token.token);
            user = token.user
            setUser(user);
            auth = true;
            setAuthorised(auth);
        }
    }
    return (
        <form onSubmit={onSubmit} className={styles.register}>
            <div className={styles.register__header}>
                {closeIcon}
                {twitterIcon}
            </div>
            <input
                placeholder="Введите имя"
                type="text"
                id="name"
            />
            <input
                placeholder="Введите тэг"
                type="text"
                id="tag"
            />
            <input
                placeholder="Введите пароль"
                type="password"
                id="password"
            />
            <button type="submit" className={styles.register__button}>
                Зарегистрироваться
            </button>
            <NavLink to={'/login'}>Войти</NavLink>
        </form>
    )
}

export default RegisterPage