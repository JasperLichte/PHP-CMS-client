import React from "react";
import {HashRouter as Router, Route, Switch,} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import HomePage from "../pages/home/HomePage";
import Error from "../error/Error";
import ErrorType from "../../util/errors/ErrorType";

export default function Routes() {
    return (<Router>
        <Switch>
            <Route path="/auth">
                <AuthRouter />
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
