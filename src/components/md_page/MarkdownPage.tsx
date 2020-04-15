import React, {useEffect} from "react";
import MarkDownToJsx from "./MarkDownToJsx";
import LoadingSpinner from "../placeholder/loading/LoadingSpinner";
import Error from "../error/Error";
import useMarkdownPage from "../../hooks/useMarkdownPage";

interface IProps {
    slug: string
}

export default function MarkdownPage({slug}: IProps) {
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
            color="#0a0"
            delayMs={500}
            fullScreen={false}
        />
        { page == null
            ? (error == null ? '' : <Error errorType={error}/>)
            : <MarkDownToJsx md={page?.markdown?.content || ''}/>
        }
    </section>);
}
