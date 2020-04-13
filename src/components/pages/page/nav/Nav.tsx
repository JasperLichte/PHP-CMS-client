import React from "react";
import {Link} from "react-router-dom";
import {Theme} from "../../../../util/themes/themes";

interface IProps {
    theme: Theme,
}

const Nav: React.FC<IProps> = ({theme}) => {
    return <nav
        style={{
            backgroundColor: theme.navBarBg,
            color: theme.navBarFont,
        }}
    >
        <h1>
            <Link to="/">Start</Link>
        </h1>
        <ul>
            {[
                {target: '/about', title: 'Über uns'},
                {target: '/team', title: 'Team'},
                {target: '/einrichtung', title: 'Einrichtung'},
                {target: '/impressum', title: 'Impressum'}
            ].map(l => <li key={l.target}><Link to={l.target}>{l.title}</Link></li>)}
        </ul>
    </nav>
};

export default Nav;
