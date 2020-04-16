import React from 'react'
import {Redirect, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom';
import DashboardPage from "../pages/admin/dashboard/DashboardPage";
import {IRouterProps} from "./Routes";
import Error from "../error/Error";
import ErrorType from "../../util/errors/ErrorType";
import StatisticsPage from "../pages/admin/statistics/StatisticsPage";
import AdminPage from "../pages/admin/AdminPage";
import EditMarkdownPage from "../md_page/edit/EditMarkdownPage";

const AdminRouter = ({user}: IRouterProps) => {
    const {path, } = useRouteMatch();
    const history = useHistory();

    if (user == null || !user.isAdmin) {
        return <Redirect to="/auth/logout" />
    }

    return (<Switch>
        <Route exact path={`${path}/`}>
            <AdminPage>
                <DashboardPage />
            </AdminPage>
        </Route>
        <Route exact path={`${path}/kontakt`}>
            <AdminPage>
                <EditMarkdownPage slug="kontakt" title="Kontakt" onSave={(error => history.push('/-/kontakt'))} />
            </AdminPage>
        </Route>
        <Route exact path={`${path}/impressum`}>
            <AdminPage>
                <EditMarkdownPage slug="impressum" title="Impressum" onSave={(error => history.push('/-/impressum'))} />
            </AdminPage>
        </Route>
        <Route exact path={`${path}/statistics`}>
            <AdminPage>
                <StatisticsPage />
            </AdminPage>
        </Route>
        <Route path="*">
            <Error errorType={ErrorType.NOT_FOUND}/>
        </Route>
    </Switch>);
};

export default AdminRouter;
