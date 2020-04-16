import React from 'react'
import {Route, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {defaultTheme} from "../../util/themes/themes";
import {AnimatePresence} from "framer-motion";
import ImpressumPage from "../pages/impressum/ImpressumPage";
import Error from "../error/Error";
import ErrorType from "../../util/errors/ErrorType";
import Page from "../pages/page/Page";
import {IRouterProps} from "./Routes";
import PageContent from "../pages/page/content/PageContent";
import KontaktPage from "../pages/kontakt/KontaktPage";

const PagesRouter = (props: IRouterProps) => {
    const {path, } = useRouteMatch();
    const location = useLocation();

    return (<Page {...props}>
        <AnimatePresence exitBeforeEnter={false}>
            <Switch location={location} key={location.pathname}>
                <Route path={`${path}/kontakt`}>
                    <KontaktPage {...props} />
                </Route>
                <Route path={`${path}/impressum`}>
                    <ImpressumPage {...props} />
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
