import ApiResponse from "./api/ApiResponse";

const base_url = 'http://localhost:8073/Projects/PHP-CMS/api'; // TODO move in config file

class Api {

    public static get(path: string, license: string): Promise<ApiResponse<any>> {
        return new Promise(async (resolve, reject) => {
            const url = new URL(`${base_url}${path}`);
            url.searchParams.delete('license');
            url.searchParams.append('license', license);

            const res = await fetch(url.href);
            const json = await res.json();
            resolve((new ApiResponse(json)).deserialize(json));
        });
    }

    public static post(path: string, license: string) {
        return (body: {}) => {
            return new Promise(async (resolve, reject) => {
                const json = (await fetch(
                    `${base_url}${path}`,
                    {
                        method: 'POST',
                        body: JSON.stringify({...body, license}),
                    }
                )).json();
                resolve((new ApiResponse(json)).deserialize(json));
            });
        }
    }

}

export default Api;
