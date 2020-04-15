import React, { useRef } from 'react'
import Markdown from 'markdown-to-jsx'
import './Markdown.scss';

interface Props {
    md: string;
}

const MarkDownToJsx = ({md, }: Props) => {
    const rootRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    return (
        <div className="markdown-to-jsx" ref={rootRef}>
            <Markdown
                options={{}}
            >{md}</Markdown>
        </div>);
}

export default MarkDownToJsx
