import React from 'react'
import {AppBar, Button, Toolbar, Typography} from "@mui/material";

import logo from './logo.svg'
import './navbar.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Navbar () {
    const isAuth = useSelector(state => state.authPage.isAuth)
    return (
        <AppBar position="relative">
            <Toolbar className={'toolbar'}>
                <img className="logo" alt="Logo" src={logo}/>
                <Typography variant="h4" component="h2">
                    Личный кабинет
                </Typography>
                <NavLink to={'/contacts'} className={'finish'}> <Button className={'button'} type="button"
                                                   variant="contained"> Ваши Контакты </Button></NavLink>
                {isAuth
                    ?  <h4
                    > Вы зарегистрированы </h4>
                    : <NavLink to={'/login'}> <Button
                        className={'button'}
                        type="button"
                        variant="contained"
                    > Зарегистрироваться </Button></NavLink>
                }
            </Toolbar>
        </AppBar>
    );
}