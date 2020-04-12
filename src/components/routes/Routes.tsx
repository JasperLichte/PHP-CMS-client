import React from "react";
import {HashRouter as Router, Route, Switch,} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import HomePage from "../pages/home/HomePage";
import Error from "../error/Error";
import ErrorType from "../../util/errors/ErrorType";
import AdminRouter from "./AdminRouter";
import User from "../../util/models/User";

export interface IRouterProps {
    user: User|null,
}

export default function Routes(props: IRouterProps) {
    return (<Router>
        <Switch>
            <Route path="/auth">
                <AuthRouter {...props} />
            </Route>
            <Route path="/admin">
                <AdminRouter {...props} />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="*">
                <Error errorType={ErrorType.NOT_FOUND} />
            </Route>
        </Switch>
    </Router>);
}
