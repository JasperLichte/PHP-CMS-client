import React from 'react'
import {Route, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {
    aboutTheme,
    defaultTheme,
    impressumTheme,
    kontaktTheme,
    teamTheme,
    whatsImportantTheme
} from "../../util/themes/themes";
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
                    <PartsPage slug="about" {...props} theme={aboutTheme} />
                </Route>
                <Route path={`${path}/team`}>
                    <PartsPage slug="team" {...props} theme={teamTheme} />
                </Route>
                <Route path={`${path}/whats-important`}>
                    <PartsPage slug="whats-important" {...props} theme={whatsImportantTheme} />
                </Route>
                <Route path={`${path}/kontakt`}>
                    <PageContent theme={kontaktTheme} {...props}>
                        <MarkdownPage slug="kontakt" />
                    </PageContent>
                </Route>
                <Route path={`${path}/impressum`}>
                    <PageContent theme={impressumTheme} {...props}>
                        <MarkdownPage slug="impressum" />
                    </PageContent>
                </Route>
                <Route path={`${path}/*`}>
                    <PageContent theme={{...defaultTheme}} {...props}>
                        <Error errorType={ErrorType.NOT_FOUND} message="Seite nicht gefunden" />
                    </PageContent>
                </Route>
            </Switch>
        </AnimatePresence>
    </Page>);
};

export default PagesRouter;
