import React from "react";
import PageContent from "../page/content/PageContent";
import {defaultTheme} from "../../../util/themes/themes";
import {IRouterProps} from "../../routes/Routes";
import MarkDownToJsx from "../../md_page/MarkDownToJsx";
import useMarkdownPageGroup from "../../../hooks/useMarkdownPageGroup";
import LoadingSpinner from "../../placeholder/loading/LoadingSpinner";

export default function AboutPage(props: IRouterProps) {
    const {pages, isLoading} = useMarkdownPageGroup('about');

    return (
        <PageContent
            theme={{
                ...defaultTheme,
                nav: {...defaultTheme.nav, bg: 'tomato', font: '#fff',},
                footer: {...defaultTheme.footer, bg: 'tomato', font: '#fff',},
            }}
            {...props}
        >
            <div>
                <LoadingSpinner color="#0a0" loading={isLoading} />
                {pages.map(p => (p != null && <section key={p?.slug}>
                    <MarkDownToJsx md={p.markdown?.content || ''} />
                </section>))}
            </div>
        </PageContent>
    );
}
