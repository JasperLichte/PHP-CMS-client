import React, {useEffect} from "react";
import MarkDownToJsx from "./MarkDownToJsx";
import LoadingSpinner from "../placeholder/loading/LoadingSpinner";
import Error from "../error/Error";
import useMarkdownPage from "../../hooks/useMarkdownPage";
import {Theme} from "../../util/themes/themes";

interface IProps {
    slug: string,
    theme: Theme,
}

export default function MarkdownPage({slug, theme}: IProps) {
    const {page, loading, error} = useMarkdownPage(slug);

    useEffect(() => {
        if (page != null) {
            document.title = page.title;
        }
    }, [page]);

    return (
    <section>
        <LoadingSpinner
            loading={loading}
            color={theme.nav.bg}
            delayMs={500}
            fullScreen={false}
        />
        { page == null
            ? (error == null ? '' : <Error errorType={error}/>)
            : <MarkDownToJsx md={page?.markdown?.content || ''}/>
        }
    </section>);
}
