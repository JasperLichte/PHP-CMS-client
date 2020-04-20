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
        font: '#fff',
    },
    footer: {
        bg: '#748076',
        font: '#fff',
    },
    sections: {
        colors: [
            {bg: '#748076', font: '#fff'},
            {bg: '#F7F7F7', font: '#222'},
            {bg: '#D2C2B1', font: '#222'},
            {bg: '#E9E3DD', font: '#222'},
            {bg: '#F3EDE2', font: '#222'},
        ]
    }
};

export const faqTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#e26d5c', font: '#fff',},
    footer: {...defaultTheme.footer, bg: '#b3d7e2', font: '#222',},
    sections: {...defaultTheme.sections,
        colors: [
            {bg: '#b3d7e2', font: '#222'},
            {bg: '#f5ff9e', font: '#222'},
            {bg: '#b3d89c', font: '#222'},
            {bg: '#e26d5c', font: '#fff'},
            {bg: '#ffe1a8', font: '#222'},
        ],
    },
};

export const whatsImportantTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#ffd300', font: '#222',},
    footer: {...defaultTheme.footer, bg: '#ffd300', font: '#222',},
    sections: {...defaultTheme.sections,
        colors: [
            {bg: '#ffd300', font: '#222'},
            {bg: '#45a91f', font: '#fff'},
            {bg: '#19832d', font: '#fff'},
            {bg: '#0eb98a', font: '#fff'},
            {bg: '#52b3d1', font: '#fff'},
            {bg: '#223b84', font: '#fff'},
            {bg: '#c42b2b', font: '#fff'},
            {bg: '#f34213', font: '#fff'},
            {bg: '#f88b32', font: '#222'},
            {bg: '#f5c012', font: '#222'},
        ],
    },
};

export const aboutTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#4d9de0', font: '#fff',},
    footer: {...defaultTheme.footer, bg: '#4d9de0', font: '#fff',},
    sections: {...defaultTheme.sections,
        colors: [
            {bg: '#4d9de0', font: '#fff'},
            {bg: '#e15554', font: '#fff'},
            {bg: '#e1bc29', font: '#222'},
            {bg: '#3bb273', font: '#fff'},
            {bg: '#7768ae', font: '#fff'},
        ],
    },
};

export const teamTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#3d348b', font: '#fff',},
    footer: {...defaultTheme.footer, bg: '#3d348b', font: '#fff',},
    sections: {...defaultTheme.sections,
        colors: [
            {bg: '#3d348b', font: '#fff'},
            {bg: '#7678ed', font: '#fff'},
            {bg: '#f7b801', font: '#222'},
            {bg: '#f18701', font: '#222'},
            {bg: '#f35b04', font: '#fff'},
        ],
    },
};

export const impressumTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#fff', font: '#222',},
    footer: {...defaultTheme.footer, bg: '#fff', font: '#222',},
};

export const kontaktTheme = {...defaultTheme,
    nav: {...defaultTheme.nav, bg: '#fff', font: '#222',},
    footer: {...defaultTheme.footer, bg: '#fff', font: '#222',},
};
