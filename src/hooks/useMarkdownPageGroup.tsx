import {useEffect, useState} from "react";
import Page from "../util/models/Page";
import RequestFactory from "../util/api/RequestFactory";

export default function useMarkdownPageGroup(slug: string) {
    const [pages, setPages] = useState<(Page|null)[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        RequestFactory.getPageGroup(slug)
            .then(res => Promise.all(res.data.group.pages.map(slug => RequestFactory.getPage(slug))))
            .then(res => {
                setPages(res.map(r => r.data.page).filter(p => p != null));
                setIsLoading(false);
            })
    }, [slug]);

    return {
        pages,
        isLoading,
    };
}
