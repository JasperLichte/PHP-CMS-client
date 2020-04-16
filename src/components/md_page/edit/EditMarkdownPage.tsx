import React, {useEffect, useState} from "react";
import useMarkdownPage from "../../../hooks/useMarkdownPage";
import LoadingSpinner from "../../placeholder/loading/LoadingSpinner";
import Error from "../../error/Error";
import ErrorType, {errorTypeByHttpStatusCode} from "../../../util/errors/ErrorType";
import MarkDownToJsx from "../MarkDownToJsx";
import './EditMarkdownPage.scss';
import RequestFactory from "../../../util/api/RequestFactory";

interface IProps {
    slug: string,
    title?: string,
    onSave: (error: ErrorType|null) => any,
}

export default function EditMarkdownPage({slug, onSave, title: _title}: IProps) {
    const {page, error, loading} = useMarkdownPage(slug);
    const [md, setMd] = useState('');
    const [title, setTitle] = useState(_title || '');

    useEffect(() => {
        if (page != null) {
            setMd(page?.markdown?.content || '');
            setTitle(page?.title || '');
        }
    }, [page]);

    async function create(): Promise<ErrorType|null> {
        const res = await RequestFactory.createPage({
            p: slug,
            content: md,
            title: title,
        });
        return errorTypeByHttpStatusCode(res.status);
    }

    async function edit(): Promise<ErrorType|null> {
        const res = await RequestFactory.editPage({
            p: slug,
            content: md,
            title: title,
        });
        return errorTypeByHttpStatusCode(res.status);
    }

    return (<div className="edit-markdown-page">
        <LoadingSpinner color="#0a0" loading={loading} />
        {error && error !== ErrorType.NOT_FOUND && <Error errorType={error} />}
        {!loading && (<>
            <div className="left">
                {error === ErrorType.NOT_FOUND && title === '' && (
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />)
                }
                <textarea
                    value={md}
                    onChange={(e) => setMd(e.target.value)}
                />
            </div>
            <MarkDownToJsx md={md}/>
            <button
                className="save-btn"
                onClick={() => {
                    if (error === ErrorType.NOT_FOUND) {
                        create().then(onSave);
                    } else {
                        edit().then(onSave);
                    }
                }}
                disabled={slug === '' || md === ''}
            >Speichern</button>
        </>)}
    </div>);
}
