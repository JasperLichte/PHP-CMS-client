import React from "react";
import MarkdownPage from "../../md_page/MarkdownPage";
import PageContent from "../page/content/PageContent";
import {defaultTheme} from "../../../util/themes/themes";

export default function ImpressumPage() {
    return (
        <PageContent theme={{...defaultTheme, nav: {...defaultTheme.nav, bg: 'purple'}}}>
            <h1>Impressum</h1>
            <MarkdownPage slug="impressum" />
        </PageContent>
    );
}
