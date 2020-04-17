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
        bg: '#222',
        font: '#ccc',
    },
    footer: {
        bg: '#222',
        font: '#ccc',
    },
    sections: {
        colors: [
            {bg: '#F7F7F7', font: '#222'},
            {bg: '#748076', font: '#fff'},
            {bg: '#E9E3DD', font: '#222'},
            {bg: '#F3EDE2', font: '#222'},
            {bg: '#D2C2B1', font: '#222'},
        ]
    }
};

export const whatsImportantTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#4B4E50', font: '#fff',},
    footer: {...defaultTheme.footer, bg: '#4B4E50', font: '#fff',},
    sections: {...defaultTheme.sections,
        colors: [
            {bg: '#4B4E50', font: '#fff'},
            {bg: '#BADCBB', font: '#222'},
            {bg: '#F29B9D', font: '#222'},
            {bg: '#F47B91', font: '#222'},
            {bg: '#FBF8CB', font: '#222'},
        ],
    },
};

export const faqTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#FF7842', font: '#fff',},
    footer: {...defaultTheme.footer, bg: '#FF7842', font: '#fff',},
    sections: {...defaultTheme.sections,
        colors: [
            {bg: '#FF7842', font: '#fff'},
            {bg: '#F6F9FA', font: '#222'},
            {bg: '#AFACA9', font: '#222'},
            {bg: '#5DA9E9', font: '#222'},
            {bg: '#E5F4E3', font: '#222'},
        ],
    },
};

export const teamTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#F6F6F6', font: '#222',},
    footer: {...defaultTheme.footer, bg: '#F6F6F6', font: '#222',},
    sections: {...defaultTheme.sections,
        colors: [
            {bg: '#F6F6F6', font: '#222'},
            {bg: '#9CA6AB', font: '#222'},
            {bg: '#FF5A09', font: '#fff'},
            {bg: '#36454C', font: '#fff'},
            {bg: '#D5DDE0', font: '#222'},
        ],
    },
};

export const aboutTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#742C60', font: '#fff',},
    footer: {...defaultTheme.footer, bg: '#742C60', font: '#fff',},
    sections: {...defaultTheme.sections,
        colors: [
            {bg: '#742C60', font: '#fff'},
            {bg: '#AF87A4', font: '#222'},
            {bg: '#C7EAD1', font: '#222'},
            {bg: '#030504', font: '#fff'},
            {bg: '#2C7440', font: '#fff'},
        ],
    },
};

export const impressumTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#5BC0EB', font: '#222',},
    footer: {...defaultTheme.footer, bg: '#5BC0EB', font: '#222',},
};

export const kontaktTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#9BC53D', font: '#222',},
    footer: {...defaultTheme.footer, bg: '#9BC53D', font: '#222',},
};
