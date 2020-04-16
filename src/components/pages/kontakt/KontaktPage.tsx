import React from "react";
import MarkdownPage from "../../md_page/MarkdownPage";
import PageContent from "../page/content/PageContent";
import {defaultTheme} from "../../../util/themes/themes";
import {IRouterProps} from "../../routes/Routes";

export default function KontaktPage(props: IRouterProps) {
    return (
        <PageContent
            theme={{
                ...defaultTheme,
                nav: {...defaultTheme.nav, bg: 'darkorange', font: '#fff',},
                footer: {...defaultTheme.footer, bg: 'darkorange', font: '#fff',},
            }}
            {...props}
        >
            <MarkdownPage slug="kontakt" />
        </PageContent>
    );
}
