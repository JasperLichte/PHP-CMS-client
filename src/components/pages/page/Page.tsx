import React from "react";
import './Page.scss';
import Nav from "./nav/Nav";
import {Theme} from "../../../util/themes/themes";

interface IProps {
    theme: Theme,
}

const Page: React.FC<IProps> = ({children, theme, }) => {
    return <div className="page">
        <Nav theme={theme} />
        <main>
            {children}
        </main>
    </div>
};

export default Page;
