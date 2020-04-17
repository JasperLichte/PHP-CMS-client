import React from "react";
import PageContent from "../../page/content/PageContent";
import {Theme} from "../../../../util/themes/themes";
import {IRouterProps} from "../../../routes/Routes";
import MarkDownToJsx from "../../../md_page/MarkDownToJsx";
import useMarkdownPageGroup from "../../../../hooks/useMarkdownPageGroup";
import LoadingSpinner from "../../../placeholder/loading/LoadingSpinner";

interface IProps extends IRouterProps {
    slug: string,
    theme: Theme,
}

export default function PartsPage({slug, theme, ...props}: IProps) {
    const {pages, isLoading} = useMarkdownPageGroup(slug);

    return (
        <PageContent theme={theme} {...props}>
            <div>
                <LoadingSpinner color="#0a0" loading={isLoading} />
                {pages.map(p => (p != null && <section key={p?.slug}>
                    <MarkDownToJsx md={p.markdown?.content || ''} />
                </section>))}
            </div>
        </PageContent>
    );
}
