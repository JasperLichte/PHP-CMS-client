import React from "react";
import PageContent from "../../page/content/PageContent";
import {IRouterProps} from "../../../routes/Routes";
import MarkDownToJsx from "../../../md_page/MarkDownToJsx";
import useMarkdownPageGroup from "../../../../hooks/useMarkdownPageGroup";
import LoadingSpinner from "../../../placeholder/loading/LoadingSpinner";
import './PartsPage.scss';
import {useSelector} from "react-redux";
import State from "../../../../util/models/State";
import useColorTheme from "../../../../hooks/useColorTheme";

interface IProps extends IRouterProps {
    slug: string,
}

export default function PartsPage({slug, ...props}: IProps) {
    const allowMultiRequests = useSelector((state: State) => state.allowMultiRequests);
    const {pages, isLoading: pagesAreLoading} = useMarkdownPageGroup(slug, allowMultiRequests);
    const {theme, isLoading: themeIsLoading} = useColorTheme(slug);

    return (
        <PageContent theme={theme} {...props}>
            <div className="parts-page">
                <LoadingSpinner color={theme.nav.bg} loading={pagesAreLoading || themeIsLoading} fullScreen={true} />
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
