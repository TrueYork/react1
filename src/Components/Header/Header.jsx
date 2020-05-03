import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png' alt='just a logo'/>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.doLogoutThunkCreator}>Logout</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;