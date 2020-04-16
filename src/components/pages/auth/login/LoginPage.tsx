import React, {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
import User from "../../../../util/models/User";
import UserServices from "../../../../util/UserServices";
import {useDispatch} from "react-redux";
import ActionType from "../../../../actions/ActionType";
import {Link, useHistory} from 'react-router-dom';
import AuthPage from "../AuthPage";

export default function LoginPage() {
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
        <h1>Anmelden</h1>
        <LoginForm onSubmit={(email, password) => {
            if (!email || !password) {
                return;
            }

            UserServices.login(email, password).then(user => {
                setUser(user);
                if (user?.isAdmin) {
                    history.push('/admin');
                } else {
                    history.push('/');
                }
            });
        }} />
        <Link to="/auth/register">Neuen Account erstellen</Link>
    </AuthPage>);
}
