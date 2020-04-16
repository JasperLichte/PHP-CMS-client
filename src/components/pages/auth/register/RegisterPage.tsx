import React, {useEffect, useState} from "react";
import RegisterForm from "./RegisterForm";
import User from "../../../../util/models/User";
import UserServices from "../../../../util/UserServices";
import {useDispatch} from "react-redux";
import ActionType from "../../../../actions/ActionType";
import {Link, useHistory} from 'react-router-dom';
import AuthPage from "../AuthPage";

export default function RegisterPage() {
    const [user, setUser] = useState<User|null>(null);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: ActionType.SET_USER,
            user: user,
        });
    }, [user, dispatch]);

    return (<AuthPage>
        <h1>Registrieren</h1>
        <RegisterForm onSubmit={(email, password) => {
            UserServices.register(email, password).then(user => {
                if (email && password) {
                    setUser(user);
                    history.push('/');
                }
            });
        }} />
        <Link to="/auth/login">Mit bestehendem Account anmelden</Link>
    </AuthPage>);
}
