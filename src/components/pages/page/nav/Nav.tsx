import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Theme} from "../../../../util/themes/themes";
import './Nav.scss';

interface IProps {
    theme: Theme,
}

const Nav: React.FC<IProps> = ({theme}) => {
    const [isOpen, setIsOpen] = useState(false);

    return <nav
        className="nav"
        style={{
            backgroundColor: theme.nav.bg,
            color: theme.nav.font,
        }}
        data-visible={isOpen ? 'yes' : 'no'}
    >
        <h1>
            <button className="open-sidebar-btn" onClick={() => setIsOpen(!isOpen)}><span /></button>
            <Link to="/">Kinderstube Sethweg e.V.</Link>
        </h1>
        <ul>
            <button className="close-btn" onClick={() => setIsOpen(!isOpen)}>
            </button>
            {[
                {target: '/-/about', title: 'Über uns'},
                {target: '/-/team', title: 'Das Team'},
                {target: '/-/whats-important', title: 'Was uns wichtig ist'},
                {target: '/-/faq', title: 'Häufig gestellte Fragen'},
                {target: '/-/kontakt', title: 'Kontakt'},
                {target: '/-/impressum', title: 'Impressum'},
            ].map(l => <li key={l.target}>
                <NavLink
                    to={l.target}
                    activeClassName='active'
                    onClick={() => setIsOpen(false)}
                >{l.title}</NavLink>
            </li>)}
        </ul>
    </nav>
};

export default Nav;
