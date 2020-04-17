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
        <p className="copyright">Copyright {(new Date()).getFullYear()}: Kinderstube Sethweg e.V.</p>
        <div className="user-actions">
            {user == null
                ? <Link to="/auth/login">Login</Link>
                : <>
                    <p>{user?.email}</p>
                    <div><Link to="/auth/logout">Logout</Link></div>
                    {user?.isAdmin && <div><Link to="/admin">Dashboard</Link></div>}
                </>}
        </div>
        <div className="jasper-lichte">
            Developed with Love by <a href="http://jasper.lichte.info">Jasper Lichte</a>
        </div>
    </footer>
};

export default Footer;
