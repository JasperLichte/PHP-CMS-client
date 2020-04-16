import React from "react";
import './AuthPage.scss';

const AuthPage: React.FC = ({children}) => {
    return (
        <div className="auth-page">
            <div className="wrapper">
                {children}
            </div>
        </div>
    );
};

export default AuthPage;
