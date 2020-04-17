import React from "react";
import EditMarkdownPage from "../../../md_page/edit/EditMarkdownPage";
import {useHistory, useParams} from "react-router-dom";

interface IProps {
    group: string,
}

export default function EditPagePartPage({group}: IProps) {
    const history = useHistory();
    const { slug } = useParams();

    if (!slug) {
        return <></>
    }

    return <EditMarkdownPage slug={slug} groupId={group} onSave={() => history.push(`/admin/${group}`)} />
}
