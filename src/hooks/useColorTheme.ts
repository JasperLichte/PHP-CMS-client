import {defaultTheme, Theme} from "../util/themes/themes";
import RequestFactory from "../util/api/RequestFactory";
import {useEffect, useState} from "react";

export default function useColorTheme (slug: string): {theme: Theme, isLoading: boolean} {
    const [theme, setTheme] = useState(defaultTheme);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        RequestFactory.getJsonFromStore(`color-theme-${slug}`).then(res => {
            if (res.status === 200 && res.data.json) {
                try {
                    const object = JSON.parse(res.data.json);
                    setTheme(object);
                } catch(e) {}
            }
            setLoading(false);
        });
    }, [slug]);

    return {theme, isLoading: loading};
}
