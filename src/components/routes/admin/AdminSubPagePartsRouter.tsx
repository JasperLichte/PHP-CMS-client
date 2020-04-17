import React from 'react'
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import {IRouterProps} from "../Routes";
import EditSubPagePartsPage from "../../pages/admin/page_parts/EditSubPagePartsPage";
import EditPagePartPage from "../../pages/admin/page_parts/EditPagePartPage";
import EditMarkdownPage from "../../md_page/edit/EditMarkdownPage";

interface IProps extends IRouterProps {
    slug: string,
}

const AdminSubPagePartsRouter = ({slug}: IProps) => {
    const {path, } = useRouteMatch();
    const history = useHistory();

    return (<Switch>
            <Route exact path={`${path}/new`}>
                <EditMarkdownPage
                    slug={`${slug}_${Date.now()}`}
                    groupId={slug}
                    onSave={() => history.push(`/admin/${slug}`)}
                />
            </Route>
            <Route exact path={`${path}/edit/:slug`}>
                <EditPagePartPage group={slug} />
            </Route>
            <Route exact path={`${path}/`}>
                <EditSubPagePartsPage slug={slug} />
            </Route>
    </Switch>);
};

export default AdminSubPagePartsRouter;
