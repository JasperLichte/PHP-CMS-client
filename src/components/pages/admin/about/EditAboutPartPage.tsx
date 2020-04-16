import React from "react";
import EditMarkdownPage from "../../../md_page/edit/EditMarkdownPage";
import {useHistory, useParams} from "react-router-dom";

export default function EditAboutPartPage() {
    const history = useHistory();
    const { slug } = useParams();

    if (!slug) {
        return <></>
    }

    return <EditMarkdownPage slug={slug} groupId="about" onSave={() => history.push('/admin/about')} />
}
