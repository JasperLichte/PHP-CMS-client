import React from "react";
import PageContent from "../../page/content/PageContent";
import {Theme} from "../../../../util/themes/themes";
import {IRouterProps} from "../../../routes/Routes";
import MarkDownToJsx from "../../../md_page/MarkDownToJsx";
import useMarkdownPageGroup from "../../../../hooks/useMarkdownPageGroup";
import LoadingSpinner from "../../../placeholder/loading/LoadingSpinner";
import './PartsPage.scss';

interface IProps extends IRouterProps {
    slug: string,
    theme: Theme,
}

export default function PartsPage({slug, theme, ...props}: IProps) {
    const {pages, isLoading} = useMarkdownPageGroup(slug);

    return (
        <PageContent theme={theme} {...props}>
            <div className="parts-page">
                <LoadingSpinner color="#0a0" loading={isLoading} fullScreen={true} />
                {pages.map((p, i) => {
                    const _theme = theme.sections.colors[i % theme.sections.colors.length];
                    return (p != null && (
                        <section
                            key={p?.slug}
                            style={{
                                backgroundColor: _theme.bg,
                                color: _theme.font,
                                zIndex: 999 - i,
                            }}
                        >
                            <MarkDownToJsx md={p.markdown?.content || ''} />
                        </section>)
                    )
                })}
            </div>
        </PageContent>
    );
}
