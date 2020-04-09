import ApiResponse from "./models/api/ApiResponse";

const base_url = 'http://localhost:8073/Projects/PHP-CMS/api'; // TODO move in config file

class Api {

    public static get(path: string): Promise<ApiResponse<any>> {
        return new Promise(async (resolve, reject) => {
            const res = await fetch(`${base_url}${path}`);
            const json = await res.json();
            resolve((new ApiResponse(json)).deserialize(json));
        });
    }

    public static post(path: string) {
        return (body: {}) => {
            return new Promise(async (resolve, reject) => {
                const json = (await fetch(
                    `${base_url}${path}`,
                    {
                        method: 'POST',
                        body: JSON.stringify(body),
                    }
                )).json();
                resolve((new ApiResponse(json)).deserialize(json));
            });
        }
    }

}

export default Api;
