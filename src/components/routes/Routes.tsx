import React from "react";
import {Route, Switch,} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import HomePage from "../pages/home/HomePage";
import Error from "../error/Error";
import ErrorType from "../../util/errors/ErrorType";
import AdminRouter from "./admin/AdminRouter";
import User from "../../util/models/User";
import PagesRouter from "./PagesRouter";
import AdminPage from "../pages/admin/AdminPage";

export interface IRouterProps {
    user: User|null,
}

export default function Routes(props: IRouterProps) {
    return (<Switch>
        <Route path="/auth">
            <AuthRouter {...props} />
        </Route>
        <Route path="/admin">
            <AdminPage>
                <AdminRouter {...props} />
            </AdminPage>
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
