import React from "react";
import {Route, Switch,} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import HomePage from "../pages/home/HomePage";
import Error from "../error/Error";
import ErrorType from "../../util/errors/ErrorType";
import AdminRouter from "./AdminRouter";
import User from "../../util/models/User";
import PagesRouter from "./PagesRouter";

export interface IRouterProps {
    user: User|null,
}

export default function Routes(props: IRouterProps) {
    document.body.className = '';
    return (<Switch>
        <Route path="/auth">
            <AuthRouter {...props} />
        </Route>
        <Route path="/admin">
            <AdminRouter {...props} />
        </Route>
        <Route path="/-">
            <PagesRouter {...props} />
        </Route>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route path="*">
            <Error errorType={ErrorType.NOT_FOUND} />
        </Route>
    </Switch>);
}
