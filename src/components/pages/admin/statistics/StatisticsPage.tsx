import React, {useEffect, useState} from "react";
import Statistics from "../../../../util/models/Statistics";
import RequestFactory from "../../../../util/api/RequestFactory";
import LoadingSpinner from "../../../placeholder/loading/LoadingSpinner";
import AdminPage from "../AdminPage";

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

    return (<AdminPage className="statistics">
        <LoadingSpinner color="#0a0" loading={loading} />
        {statistics != null && <>
            <h1>{statistics?.totalRequests}</h1>
        </>}
    </AdminPage>);
}
