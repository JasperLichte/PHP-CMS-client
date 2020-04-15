import {useEffect, useState} from "react";
import Page from "../util/models/Page";
import ErrorType, {errorTypeByHttpStatusCode} from "../util/errors/ErrorType";
import RequestFactory from "../util/api/RequestFactory";

export default function useMarkdownPage(slug: string) {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<Page|null>(null);
    const [error, setError] = useState<ErrorType|null>(null);

    useEffect(() => {
        RequestFactory.getPage(slug).then(res => {
            setLoading(false);
            if (res.status === 200) {
                setPage(res.data.page);
            } else {
                setError(errorTypeByHttpStatusCode(res.status));
            }
        });
    }, [slug]);

    return {page, loading, error};
}
