export type Theme = {
    nav: navTheme,
};

type navTheme = {
    bg: string,
    font: string,
    activeBg: string,
    activeFont: string,
}

export const defaultTheme: Theme = {
    nav: {
        bg: '#222',
        font: '#ccc',
        activeFont: '#fff',
        activeBg: 'transparent',
    }
};
