import React from "react";
import './Page.scss';
import Nav from "./nav/Nav";
import {useSelector} from "react-redux";
import {themeSelector} from "../../../selectors/selectors";
import {IRouterProps} from "../../routes/Routes";

const Page: React.FC<IRouterProps> = ({children, user}) => {
    const theme = useSelector(themeSelector);

    return <div className="page">
        <Nav theme={theme} />
        <div className="content">
            <main>
                {children}
            </main>
        </div>
    </div>
};

export default Page;
