export type Theme = {
    nav: NavTheme,
    footer: FooterTheme,
    sections: SectionsTheme,
};

type NavTheme = {
    bg: string,
    font: string,
}

type FooterTheme = {
    bg: string,
    font: string,
}

type SectionsTheme = {
    colors: {bg: string, font: string,}[],
}

export const defaultTheme: Theme = {
    nav: {
        bg: '#748076',
        font: '#ffffff',
    },
    footer: {
        bg: '#748076',
        font: '#ffffff',
    },
    sections: {
        colors: [
            {bg: '#748076', font: '#ffffff'},
            {bg: '#F7F7F7', font: '#222222'},
            {bg: '#D2C2B1', font: '#222222'},
            {bg: '#E9E3DD', font: '#222222'},
            {bg: '#F3EDE2', font: '#222222'},
        ]
    }
};
