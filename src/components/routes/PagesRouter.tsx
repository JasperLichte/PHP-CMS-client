import React from 'react'
import {Route, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import Error from "../error/Error";
import ErrorType from "../../util/errors/ErrorType";
import Page from "../pages/page/Page";
import {IRouterProps} from "./Routes";
import PageContent from "../pages/page/content/PageContent";
import PartsPage from "../pages/page/parts_page/PartsPage";
import MarkdownPage from "../md_page/MarkdownPage";

const PagesRouter = (props: IRouterProps) => {
    const {path, } = useRouteMatch();
    const location = useLocation();

    return (<Page {...props}>
        <AnimatePresence exitBeforeEnter={false}>
            <Switch location={location} key={location.pathname}>
                <Route path={`${path}/about`}>
                    <PartsPage slug="about" {...props} />
                </Route>
                <Route path={`${path}/team`}>
                    <PartsPage slug="team" {...props} />
                </Route>
                <Route path={`${path}/whats-important`}>
                    <PartsPage slug="whats-important" {...props} />
                </Route>
                <Route path={`${path}/faq`}>
                    <PartsPage slug="faq" {...props} />
                </Route>
                <Route path={`${path}/kontakt`}>
                    <PageContent {...props}>
                        <MarkdownPage slug="kontakt"  />
                    </PageContent>
                </Route>
                <Route path={`${path}/impressum`}>
                    <PageContent {...props}>
                        <MarkdownPage slug="impressum"  />
                    </PageContent>
                </Route>
                <Route path={`${path}/*`}>
                    <PageContent {...props}>
                        <Error errorType={ErrorType.NOT_FOUND} message="Seite nicht gefunden" />
                    </PageContent>
                </Route>
            </Switch>
        </AnimatePresence>
    </Page>);
};

export default PagesRouter;
