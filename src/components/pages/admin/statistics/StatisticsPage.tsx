import React, {useEffect, useState} from "react";
import Statistics from "../../../../util/models/Statistics";
import RequestFactory from "../../../../util/api/RequestFactory";
import LoadingSpinner from "../../../placeholder/loading/LoadingSpinner";
import './StatisticsPage.scss';

export default function StatisticsPage() {
    const [statistics, setStatistics] = useState<Statistics|null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        RequestFactory.getStatistics().then(res => {
            if (res.status === 200) {
                setStatistics(res.data.statistics);
            }
            setLoading(false);
        });
    }, [setStatistics]);

    return (<>
        <LoadingSpinner color="#0a0" loading={loading} />
        {statistics != null && <div className="statistics-page">
            <h1><span>{statistics?.totalRequests}</span> Aufrufe gesamt</h1>
            <table>
                <thead>
                    <tr><th>Url</th><th>Aufrufe</th></tr>
                </thead>
                <tbody>
                    {
                        Object.keys(statistics?.requestsByPath).map(p => <tr key={p}>
                            <td>{p}</td><td>{statistics?.requestsByPath[p]}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>}
    </>);
}
