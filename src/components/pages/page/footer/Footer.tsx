import React from "react";
import {Theme} from "../../../../util/themes/themes";
import {Link} from "react-router-dom";
import User from "../../../../util/models/User";
import './Footer.scss';

interface IProps {
    theme: Theme,
    user: User|null,
}

const Footer: React.FC<IProps> = ({theme, user}) => {
    return <footer
        className="footer"
        style={{
            backgroundColor: theme.footer.bg,
            color: theme.footer.font,
        }}
    >
        <div>
            {user == null
                ? <Link to="/auth/login">Login</Link>
                : <>
                    <p>{user?.email}</p>
                    <div><Link to="/auth/logout">Logout</Link></div>
                    {user?.isAdmin && <div><Link to="/admin">Dashboard</Link></div>}
                </>}
        </div>
    </footer>
};

export default Footer;
