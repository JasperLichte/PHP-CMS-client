import React from "react";
import {Link} from "react-router-dom";
import useMarkdownPageGroup from "../../../../hooks/useMarkdownPageGroup";
import LoadingSpinner from "../../../placeholder/loading/LoadingSpinner";
import RequestFactory from "../../../../util/api/RequestFactory";
import './EditSubPagePartsPage.scss';

interface IProps {
    slug: string,
}

export default function EditSubPagePartsPage({slug}: IProps) {
    const {pages, isLoading} = useMarkdownPageGroup(slug);

    return (<div className="about-admin-page">
        <LoadingSpinner color="#0a0" loading={isLoading} />
        <Link to={`/-/${slug}`}>Zur Seite</Link>
        <h2>Textparts:</h2>
        <table>
            { !isLoading && (<tbody>
                {pages.length > 0
                    ? pages.map(p => p != null && (
                        <tr key={p?.slug}>
                            <td>{p?.title}</td>
                            <td><Link to={`/admin/${slug}/edit/${p?.slug}`}>Bearbeiten</Link></td>
                            <td><button
                                    onClick={() => RequestFactory.deletePage(p?.slug).then(() => window.location.reload())}
                                >Löschen</button>
                            </td>
                        </tr>))
                    : <tr><td>Es gibt noch keine Parts</td></tr>
                }
            </tbody>)}
        </table>
        <Link to={`/admin/${slug}/new`} className="create-link">Neu</Link>
    </div>);
}
