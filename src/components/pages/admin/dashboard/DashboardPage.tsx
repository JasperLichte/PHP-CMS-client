import React from "react";
import {Link} from "react-router-dom";
import './DashboardPage.scss';
import {aboutTheme, defaultTheme, impressumTheme, kontaktTheme, teamTheme} from "../../../../util/themes/themes";

export default function DashboardPage() {
    const links = [
        {
            target: '/admin/team',
            title: 'Das Team',
            theme: teamTheme,
        },
        {
            target: '/admin/about',
            title: 'Über uns',
            theme: aboutTheme,
        },
        {
            target: '/admin/kontakt',
            title: 'Kontakt',
            theme: kontaktTheme,
        },
        {
            target: '/admin/impressum',
            title: 'Impressum',
            theme: impressumTheme,
        },
        {
            target: '/admin/statistics',
            title: 'Statistiken',
            theme: {...defaultTheme, nav: {...defaultTheme.nav, bg: '#222', font: '#fff'}},
        },
        {
            target: '/auth/logout',
            title: 'Abmelden',
            theme: {...defaultTheme, nav: {...defaultTheme.nav, bg: '#5a021e', font: '#fff'}},
        },
    ];

    return (<div className="dashboard-page">
        <ul>
            {
                links.map(l => <Link to={l.target} key={l.target}>
                    <li
                        style={{
                            backgroundColor: l.theme.nav.bg,
                            color: l.theme.nav.font,
                        }}
                    >{l.title}</li>
                </Link>)
            }
        </ul>
    </div>);
}
