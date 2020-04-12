import React, {useEffect, useState} from "react";
import Page from "../../util/models/Page";
import RequestFactory from "../../util/api/RequestFactory";
import MarkDownToJsx from "./MarkDownToJsx";
import LoadingSpinner from "../placeholder/loading/LoadingSpinner";
import {useSelector} from "react-redux";
import {settingsSelector} from "../../selectors/selectors";
import ErrorType, {errorTypeByHttpStatusCode} from "../../util/errors/ErrorType";
import Error from "../error/Error";

interface IProps {
    slug: string
}

export default function MarkdownPage({slug}: IProps) {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<Page|null>(null);
    const [error, setError] = useState<ErrorType|null>(null);
    const settings = useSelector(settingsSelector);

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

    useEffect(() => {
        if (page != null) {
            document.title = page.title;
        }
    }, [page]);

    return (
    <section>
        <LoadingSpinner
            loading={loading}
            color={settings?.find(s => s.key === 'ACCENT_COLOR')?.value || ''}
            delayMs={500}
        />
        { page == null
            ? (error == null ? '' : <Error errorType={error}/>)
            : <MarkDownToJsx md={page?.markdown?.content || ''}/>
        }
    </section>);
}
