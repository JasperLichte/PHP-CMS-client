import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const AuthRouter = () => {
    const {path, } = useRouteMatch();

    return (<Switch>
        <Route path={`${path}/login`}>
        </Route>
        <Route path={`${path}/register`}>
        </Route>
        <Route path={`${path}/logout`}>
        </Route>
        <Route path={`${path}/*`}>
        </Route>
    </Switch>);
};

export default AuthRouter;
