import React, {useEffect, useState} from "react";
import UserServices from "../../../../util/UserServices";
import {useDispatch} from "react-redux";
import ActionType from "../../../../actions/ActionType";
import {Redirect} from 'react-router-dom';

export default function LogoutPage() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        UserServices.logout().then(success => {
            if (success) {
                dispatch({
                    type: ActionType.SET_USER,
                    user: null,
                });
            }
            setLoading(false);
        });
    }, [dispatch]);

    if (loading) {
        return <></>;
    }
    return <Redirect to="/auth/login" />
}
