import React from "react";
import {Link} from "react-router-dom";
import './AdminPage.scss';

interface IProps {
    className?: string,
}

const AdminPage: React.FC<IProps> = ({children, className}) => {
    return (<div className="admin-page">
        <nav>
            <ul>
                <li><Link to="/">Start</Link></li>
                <li><Link to="/admin">Dashboard</Link></li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
    </div>);
};

export default AdminPage;
