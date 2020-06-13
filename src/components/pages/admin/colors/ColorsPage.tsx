import React from "react";
import ColorThemeInputs from "./inputs/ColorThemeInputs";

export default function ColorsPage() {

    return (<>
        <ColorThemeInputs slug="about" title="Über uns" />
        <ColorThemeInputs slug="team" title="Das Team" />
        <ColorThemeInputs slug="whats-important" title="Was uns wichtig ist" />
        <ColorThemeInputs slug="faq" title="Häufig gestellte Fragen" />
        <ColorThemeInputs slug="kontakt" title="Kontakt" />
        <ColorThemeInputs slug="impressum" title="Impressum" />
    </>);
}
