import React from "react";
import Setting from "../../util/models/Setting";

interface IProps {
    settings: Setting[],
}

export default function SettingsApplyer({settings}: IProps) {
    const css = `html {
        ${
            settings
            .filter(s => s.cssProperty != null)
            .map(s => `${s.cssProperty}: ${s.value};`)
            .join('')
        }
    }`;

    document.title = settings.find(s => s.key === 'APP_NAME')?.value || '';

    return (
        <style>{css}</style>
    );
}
