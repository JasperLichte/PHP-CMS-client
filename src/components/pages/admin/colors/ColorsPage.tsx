import React from "react";
import ColorThemeInputs from "./inputs/ColorThemeInputs";

export default function ColorsPage() {

    return (<>
        <ColorThemeInputs slug="team" title="Team" />
        <ColorThemeInputs slug="raeume" title="Räume" />
        <ColorThemeInputs slug="about" title="Über uns" />
        <ColorThemeInputs slug="partner" title="Partner" />
        <ColorThemeInputs slug="angebote" title="Angebote" />
    </>);
}
