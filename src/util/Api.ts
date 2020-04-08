const base_url = 'http://localhost:8073/Projects/PHP-CMS/api'; // TODO move in config file

class Api {

    public static async get(path: string) {
        return (await fetch(`${base_url}${path}`)).json();
    }

    public static post(path: string)  {
        return async (body: {}) => (await fetch(
            `${base_url}${path}`,
            {
                method: 'POST',
                body: JSON.stringify(body),
            }
        )).json();
    }

}

export default Api;
