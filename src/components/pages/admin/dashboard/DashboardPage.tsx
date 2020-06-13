import React from "react";
import {Link} from "react-router-dom";
import './DashboardPage.scss';
import {defaultTheme} from "../../../../util/themes/themes";

export default function DashboardPage() {
    const links = [
        {
            target: '/admin/team',
            title: 'Das Team',
        },
        {
            target: '/admin/about',
            title: 'Über uns',
        },
        {
            target: '/admin/whats-important',
            title: 'Was uns wichtig ist',
        },
        {
            target: '/admin/faq',
            title: 'Häufig gestellte Fragen',
        },
        {
            target: '/admin/kontakt',
            title: 'Kontakt',
        },
        {
            target: '/admin/impressum',
            title: 'Impressum',
        },
        {
            target: '/admin/colors',
            title: 'Farben',
        },
        {
            target: '/admin/statistics',
            title: 'Statistiken',
        },
        {
            target: '/auth/logout',
            title: 'Abmelden',
        },
    ];

    return (<div className="dashboard-page">
        <ul>
            {
                links.map(l => <Link to={l.target} key={l.target}>
                    <li
                        style={{
                            backgroundColor: defaultTheme.nav.bg,
                            color: defaultTheme.nav.font,
                        }}
                    >{l.title}</li>
                </Link>)
            }
        </ul>
    </div>);
}
