import {useEffect, useState} from "react";
import Page from "../util/models/Page";
import RequestFactory from "../util/api/RequestFactory";
import ApiResponse from "../util/api/ApiResponse";
import GetPageResponse from "../util/api/responses/pages/GetPageResponse";

export default function useMarkdownPageGroup(slug: string, allowMultiRequests: boolean = false) {
    const [pages, setPages] = useState<(Page|null)[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.time();
        if (allowMultiRequests) {
            RequestFactory.getPageGroup(slug)
            .then(res => Promise.all(res.data.group.pages.map(slug => RequestFactory.getPage(slug))))
            .then((res) => {
                setPages(res.map(r => r.data.page).filter(p => p != null));
                setIsLoading(false);
            });
        } else {
            RequestFactory.getPageGroup(slug)
            .then(async res => {
                const responses: ApiResponse<GetPageResponse>[] = [];
                for (const slug of res.data.group.pages) {
                    responses.push(await RequestFactory.getPage(slug));
                }
                setPages(responses.map(r => r.data.page).filter(p => p != null));
                setIsLoading(false);
            })
        }
    }, [slug, allowMultiRequests]);

    return {
        pages,
        isLoading,
    };
}
