import React, {useEffect, useState} from "react";
import LoadingSpinner from "../../../../placeholder/loading/LoadingSpinner";
import useColorTheme from "../../../../../hooks/useColorTheme";
import "./ColorThemeInputs.scss";
import RequestFactory from "../../../../../util/api/RequestFactory";

interface IProps {
    slug: string,
    title: string,
}

export default function ColorThemeInputs({slug, title}: IProps) {
    const {theme: oldTheme, isLoading} = useColorTheme(slug);
    const [theme, setTheme] = useState(oldTheme);
    const [sections, setSections] = useState(oldTheme.sections.colors);

    useEffect(() => {
        setTheme(oldTheme);
        setSections(oldTheme.sections.colors);
    }, [oldTheme]);

    return (<div className="color-theme-inputs">
        <LoadingSpinner color="#0a0" loading={isLoading} />
        <h2>{title}</h2>
        <div className="row">
            <p>Navigation Hintergrund</p>
            <input
                type="color"
                value={theme.nav.bg}
                onChange={e => setTheme({...theme, nav: {...theme.nav, bg: e.target.value}})}
            />
        </div>
        <div className="row">
            <p>Navigation Schrift</p>
            <input
                type="color"
                value={theme.nav.font}
                onChange={e => setTheme({...theme, nav: {...theme.nav, font: e.target.value}})}
            />
        </div>
        <div className="row">
            <p>Footer Hintergrund</p>
            <input
                type="color"
                value={theme.footer.bg}
                onChange={e => setTheme({...theme, footer: {...theme.footer, bg: e.target.value}})}
            />
        </div>
        <div className="row">
            <p>Footer Schrift</p>
            <input
                type="color"
                value={theme.footer.font}
                onChange={e => setTheme({...theme, footer: {...theme.footer, font: e.target.value}})}
            />
        </div>
        {sections.map((s, i) => <div className="row section" key={`section-row-${i}`}>
            <p>Abschnitt {i + 1}</p>
            <input
                type="color"
                title="Hintergrund"
                value={s.bg}
                onChange={e => {
                    const newSections = [...sections];
                    newSections[i].bg = e.target.value;
                    setSections(newSections);
                }}
            />
            <input
                type="color"
                value={s.font}
                title="Schrift"
                onChange={e => {
                    const newSections = [...sections];
                    newSections[i].font = e.target.value;
                    setSections(newSections);
                }}
            />
            <button
                onClick={() => {
                    const newSections = [...sections];
                    newSections.splice(i, 1);
                    setSections(newSections);
                }}
            >Entfernen</button>
        </div>)}
        <button
            onClick={() => setSections([...sections, {bg: '#ffffff', font: '#000000'}])}
        >Farbe hinzufügen</button>
        <button
            onClick={() => {
                const _theme = {...theme};
                _theme.sections.colors = sections;
                RequestFactory.saveJsonInStore(`color-theme-${slug}`, JSON.stringify(_theme)).then(res => {
                    if (res.status === 200) {
                        window.location.reload();
                    }
                });
            }}
        >Speichern</button>
    </div>);
}
