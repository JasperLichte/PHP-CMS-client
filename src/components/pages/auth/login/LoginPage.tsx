import React, {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
import User from "../../../../util/models/User";
import UserServices from "../../../../util/UserServices";
import {useDispatch} from "react-redux";
import ActionType from "../../../../actions/ActionType";
import {Link, useHistory} from 'react-router-dom';

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

    return (<div className="login-page">
        <LoginForm onSubmit={(email, password) => {
            UserServices.login(email, password).then(user => {
                setUser(user);
                history.push('/');
            });
        }} />
        <Link to="/auth/register">Sign up instead</Link>
    </div>);
}
