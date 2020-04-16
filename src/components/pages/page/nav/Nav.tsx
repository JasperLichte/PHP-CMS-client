import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Theme} from "../../../../util/themes/themes";
import './Nav.scss';

interface IProps {
    theme: Theme,
}

const Nav: React.FC<IProps> = ({theme}) => {
    return <nav
        className="nav"
        style={{
            backgroundColor: theme.nav.bg,
            color: theme.nav.font,
        }}
    >
        <h1>
            <Link to="/">Start</Link>
        </h1>
        <ul>
            {[
                {target: '/-/about', title: 'Über uns'},
                {target: '/-/team', title: 'Team'},
                {target: '/-/einrichtung', title: 'Einrichtung'},
                {target: '/-/kontakt', title: 'Kontakt'},
                {target: '/-/impressum', title: 'Impressum'},
            ].map(l => <li key={l.target}>
                <NavLink
                    to={l.target}
                    activeClassName='active'
                    activeStyle={{
                        color: theme.nav.activeFont,
                        backgroundColor: theme.nav.activeBg,
                    }}
                >{l.title}</NavLink>
            </li>)}
        </ul>
    </nav>
};

export default Nav;
