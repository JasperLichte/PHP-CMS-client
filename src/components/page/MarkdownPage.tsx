import React, {useEffect, useState} from "react";
import Page from "../../util/models/Page";
import RequestFactory from "../../util/api/RequestFactory";

interface IProps {
    slug: string
}

export default function MarkdownPage({slug}: IProps) {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<Page|null>(null);

    useEffect(() => {
        RequestFactory.getPage(slug).then(res => {
            setLoading(false);
            if (res.status === 200) {
                setPage(res.data.page);
            }
        });
    }, [slug]);

    useEffect(() => {
        if (page != null) {
            document.title = page.title;
        }
    }, [page]);

    return (<>{
        loading
            ? 'loading'
            : <>{
                page == null
                    ? '404'
                    : page.markdown?.content
            }</>
    }</>);
}
