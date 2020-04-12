import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import LoginPage from "../pages/auth/login/LoginPage";
import Error from "../error/Error";
import ErrorType from "../../util/errors/ErrorType";
import LogoutPage from "../pages/auth/logout/LogoutPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import {IRouterProps} from "./Routes";

const AuthRouter = (props: IRouterProps) => {
    const {path, } = useRouteMatch();

    return (<Switch>
        <Route path={`${path}/login`}>
            <LoginPage/>
        </Route>
        <Route path={`${path}/register`}>
            <RegisterPage/>
        </Route>
        <Route path={`${path}/logout`}>
            <LogoutPage/>
        </Route>
        <Route path={`${path}/*`}>
            <Error errorType={ErrorType.NOT_FOUND}/>
        </Route>
    </Switch>);
};

export default AuthRouter;
