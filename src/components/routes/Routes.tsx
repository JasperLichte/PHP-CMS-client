import React from "react";
import {HashRouter as Router, Route, Switch,} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import HomePage from "../pages/home/HomePage";
import Error from "../error/Error";
import ErrorType from "../../util/errors/ErrorType";
import AdminRouter from "./AdminRouter";
import User from "../../util/models/User";
import Page from "../pages/page/Page";
import ImpressumPage from "../pages/impressum/ImpressumPage";
import {defaultTheme} from "../../util/themes/themes";

export interface IRouterProps {
    user: User|null,
}

export default function Routes(props: IRouterProps) {
    document.body.className = '';
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
            <Route path="/impressum">
                <Page
                    theme={{...defaultTheme, navBarBg: 'purple',}}
                >
                    <ImpressumPage/>
                </Page>
            </Route>
            <Route path="*">
                <Page theme={defaultTheme}>
                    <Error errorType={ErrorType.NOT_FOUND} />
                </Page>
            </Route>
        </Switch>
    </Router>);
}
