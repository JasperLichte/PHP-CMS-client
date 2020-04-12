import React, {useEffect, useState} from "react";
import RegisterForm from "./RegisterForm";
import User from "../../../../util/models/User";
import UserServices from "../../../../util/UserServices";
import {useDispatch} from "react-redux";
import ActionType from "../../../../actions/ActionType";
import {Link, useHistory} from 'react-router-dom';

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

    return (<div className="register-page">
        <RegisterForm onSubmit={(email, password) => {
            UserServices.register(email, password).then(user => {
                setUser(user);
                history.push('/');
            });
        }} />
        <Link to="/auth/login">Log in instead</Link>
    </div>);
}
