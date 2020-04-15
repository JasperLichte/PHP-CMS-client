import React from "react";
import MarkdownPage from "../../md_page/MarkdownPage";
import PageContent from "../page/content/PageContent";
import {defaultTheme} from "../../../util/themes/themes";
import {IRouterProps} from "../../routes/Routes";
import {Link} from "react-router-dom";

export default function ImpressumPage({user}: IRouterProps) {
    return (
        <PageContent
            theme={{
                ...defaultTheme,
                nav: {...defaultTheme.nav, bg: 'purple'},
            }}
        >
            <MarkdownPage slug="impressum" />
            <div>
                {user == null
                    ? <Link to="/auth/login">Login</Link>
                    : <>
                        <p>{user?.email}</p>
                        <div><Link to="/auth/logout">Logout</Link></div>
                        {user?.isAdmin && <div><Link to="/admin">Dashboard</Link></div>}
                    </>}
            </div>
        </PageContent>
    );
}
