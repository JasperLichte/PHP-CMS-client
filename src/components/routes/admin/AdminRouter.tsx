import React from 'react'
import {Redirect, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom';
import DashboardPage from "../../pages/admin/dashboard/DashboardPage";
import {IRouterProps} from "../Routes";
import Error from "../../error/Error";
import ErrorType from "../../../util/errors/ErrorType";
import StatisticsPage from "../../pages/admin/statistics/StatisticsPage";
import EditMarkdownPage from "../../md_page/edit/EditMarkdownPage";
import AdminSubPagePartsRouter from "./AdminSubPagePartsRouter";
import ColorsPage from "../../pages/admin/colors/ColorsPage";

const AdminRouter = (props: IRouterProps) => {
    const {path, } = useRouteMatch();
    const history = useHistory();

    if (props.user == null || !props.user.isAdmin) {
        return <Redirect to="/auth/logout" />
    }

    return (<Switch>
        <Route exact path={`${path}/`}>
            <DashboardPage />
        </Route>
        <Route path={`${path}/team`}>
            <AdminSubPagePartsRouter slug="team" {...props} />
        </Route>
        <Route path={`${path}/raeume`}>
            <AdminSubPagePartsRouter slug="raeume" {...props} />
        </Route>
        <Route path={`${path}/about`}>
            <AdminSubPagePartsRouter slug="about" {...props} />
        </Route>
        <Route exact path={`${path}/kontakt`}>
            <EditMarkdownPage slug="kontakt" title="Kontakt" onSave={(error => history.push('/-/kontakt'))} />
        </Route>
        <Route path={`${path}/partner`}>
            <AdminSubPagePartsRouter slug="partner" {...props} />
        </Route>
        <Route path={`${path}/angebote`}>
            <AdminSubPagePartsRouter slug="angebote" {...props} />
        </Route>
        <Route exact path={`${path}/impressum`}>
            <EditMarkdownPage slug="impressum" title="Impressum" onSave={(error => history.push('/-/impressum'))} />
        </Route>
        <Route exact path={`${path}/colors`}>
            <ColorsPage />
        </Route>
        <Route exact path={`${path}/statistics`}>
            <StatisticsPage />
        </Route>
        <Route path="*">
            <Error errorType={ErrorType.NOT_FOUND}/>
        </Route>
    </Switch>);
};

export default AdminRouter;
