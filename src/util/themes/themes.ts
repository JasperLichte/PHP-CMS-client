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

export const teamTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#748c56', font: '#fff',},
    footer: {...defaultTheme.footer, bg: '#748c56', font: '#fff',},
};

export const aboutTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: 'tomato', font: '#fff',},
    footer: {...defaultTheme.footer, bg: 'tomato', font: '#fff',},
};

export const impressumTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: 'purple', font: '#fff',},
    footer: {...defaultTheme.footer, bg: 'purple', font: '#fff',},
};

export const kontaktTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: 'darkorange', font: '#000',},
    footer: {...defaultTheme.footer, bg: 'darkorange', font: '#000',},
};
