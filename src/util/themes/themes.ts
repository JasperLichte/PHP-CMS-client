export type Theme = {
    nav: NavTheme,
    footer: FooterTheme,
};

type NavTheme = {
    bg: string,
    font: string,
    activeBg: string,
    activeFont: string,
}

type FooterTheme = {
    bg: string,
    font: string,
}

export const defaultTheme: Theme = {
    nav: {
        bg: '#222',
        font: '#ccc',
        activeFont: '#fff',
        activeBg: 'transparent',
    },
    footer: {
        bg: '#222',
        font: '#ccc',
    }
};
