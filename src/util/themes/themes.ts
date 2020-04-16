export type Theme = {
    nav: NavTheme,
    footer: FooterTheme,
};

type NavTheme = {
    bg: string,
    font: string,
}

type FooterTheme = {
    bg: string,
    font: string,
}

export const defaultTheme: Theme = {
    nav: {
        bg: '#222',
        font: '#ccc',
    },
    footer: {
        bg: '#222',
        font: '#ccc',
    }
};
