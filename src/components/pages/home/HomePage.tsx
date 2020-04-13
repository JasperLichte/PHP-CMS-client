import React from "react";
import {Link} from "react-router-dom";
import './HomePage.scss';
import {useSelector} from "react-redux";
import {userSelector} from "../../../selectors/selectors";
import SvgScene from "./svg_scene/SvgScene";

export default function HomePage() {
    const user = useSelector(userSelector);

    return (<div className="home-page">
        <SvgScene/>
        <nav>
            { user != null
                ? (<div>
                    <p>{user?.email}</p>
                    {user?.isAdmin && <div><Link to="/admin">Dashboard</Link></div>}
                    <div><Link to="/auth/logout">logout</Link></div>
                </div>)
                : (<Link to="/auth/login">Login</Link>)
            }
        </nav>
    </div>);
}
