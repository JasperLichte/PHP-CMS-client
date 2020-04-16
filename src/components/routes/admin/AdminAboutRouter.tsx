import React from 'react'
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import {IRouterProps} from "../Routes";
import AboutAdminPage from "../../pages/admin/about/AboutAdminPage";
import EditAboutPartPage from "../../pages/admin/about/EditAboutPartPage";
import EditMarkdownPage from "../../md_page/edit/EditMarkdownPage";

const AdminAboutRouter = (props: IRouterProps) => {
    const {path, } = useRouteMatch();
    const history = useHistory();

    return (<Switch>
            <Route exact path={`${path}/new`}>
                <EditMarkdownPage
                    slug={`about_${Date.now()}`}
                    groupId="about"
                    onSave={() => history.push('/admin/about')}
                />
            </Route>
            <Route exact path={`${path}/edit/:slug`}>
                <EditAboutPartPage />
            </Route>
            <Route exact path={`${path}/`}>
                <AboutAdminPage />
            </Route>
    </Switch>);
};

export default AdminAboutRouter;
