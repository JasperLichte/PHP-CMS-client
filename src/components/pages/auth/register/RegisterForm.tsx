import React, {useState} from "react";

interface IProps {
    onSubmit: (email: string, password: string) => any,
}

export default function RegisterForm({onSubmit}: IProps) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (<div className="auth-form">
        <h2>E-Mail</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <h2>Passwort</h2>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => onSubmit(email, password)}>Erstellen</button>
    </div>);
}
